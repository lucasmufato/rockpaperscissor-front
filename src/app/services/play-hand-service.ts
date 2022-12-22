import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContestResult} from "../model/contest-result";

@Injectable({
  providedIn: 'root'
})
export class PlayHandService {

  constructor(private http: HttpClient) { }

  playHand(handType:string): Observable<ContestResult>{
    return this.http.post<ContestResult>("http://localhost:8080/computer/play-hand", {"hand_shape": handType})
  }


}
