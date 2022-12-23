import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {
  backendApiUrl = environment.backendApiUrl;
  constructor(private http: HttpClient) { }

  post(resourceUrl:string, body: any): Observable<any>{
    return this.http.post(this.backendApiUrl+resourceUrl, body)
  }
}
