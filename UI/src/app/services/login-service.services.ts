import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  private baseUrl: string = "https://localhost:7082/api/User/"
  constructor(private http : HttpClient) { }

  signup(userObj:any){
   return this.http.post<any>(`${this.baseUrl}register`,userObj );
  }
  login(loginObj: any){
    return this.http.post<any>(`${this.baseUrl}authenticate`,loginObj  );
  }
  show():Observable<any[]>{
    return this.http.get<any>(this.baseUrl + '/show');
  }

}