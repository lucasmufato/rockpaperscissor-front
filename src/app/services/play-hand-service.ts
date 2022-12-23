import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {ContestResult} from "../model/contest-result";
import {BackendApiService} from "./backend-api.service";

@Injectable({
  providedIn: 'root'
})
export class PlayHandService {

  constructor(private backendApiService: BackendApiService) { }

  playHand(handType:string): Observable<ContestResult>{
    return this.backendApiService.post("/computer/play-hand", {"hand_shape": handType})
  }


}
