import { Component } from '@angular/core';
import {PlayHandService} from "../services/play-hand-service";
import {ContestResult} from "../model/contest-result";
import {combineLatest, delay, Observable, of} from "rxjs";

@Component({
  selector: 'app-against-computer',
  templateUrl: './against-computer.component.html',
  styleUrls: ['./against-computer.component.css']
})
export class AgainstComputerComponent {

  selectedHandtype: string = ""
  visibleHandShaking: boolean= false;
  backend: PlayHandService
  resultTitle: string = "";
  oponent_hand: string = "";
  isResultVisible: boolean = false;

  constructor(backend: PlayHandService) {
    this.backend = backend
  }

  selected(handType: string) {
    console.log("selected ", handType)
    this.selectedHandtype = handType
  }

  canPlay(){
    return this.selectedHandtype != ""
  }

  playSelectedHand() {
    console.log("wants to play")
    if (this.canPlay()){
      this.isResultVisible = false
      this.showHandShaking()
      this.playHandWhileWaitingForAnimation()
    }
  }

  private playHandWhileWaitingForAnimation() {
    let contestResultObservable = this.backend.playHand(this.selectedHandtype);
    let waitTwoSecondsObservable = this.waitToSeconds()
    combineLatest([contestResultObservable,waitTwoSecondsObservable]).subscribe({
      next:([result,_]) => this.showContestResult(result),
      error:(err) => this.showError(err)
    })
  }

  private showError(err: any) {
    this.stopHandShaking()
    alert(`there was an error: ${err}`)
  }

  private stopHandShaking() {
    this.visibleHandShaking = false
  }

  private showHandShaking() {
    this.visibleHandShaking = true
  }

  private showContestResult(contestResult: ContestResult) {
    this.stopHandShaking()
    this.selectedHandtype = ""
    this.resultTitle = contestResult.result
    this.oponent_hand = contestResult.opposing_hand
    this.isResultVisible = true
  }

  private waitToSeconds(): Observable<any> {
    return of("discard").pipe(delay(3000))
  }

}
