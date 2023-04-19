import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  readonly ExamUrl = "https://localhost:44382/Api/Exam";

  readonly CountryUrl = "https://localhost:44382/Api/Country";

  constructor(private http:HttpClient) { }

  addExam(data:any) {
    return this.http.post(this.ExamUrl + '/Add', data);
  }
  showExam():Observable<any[]>{
    return this.http.get<any>(this.ExamUrl + '/Show');
  }

  updateExam(data:any) {
    return this.http.put(this.ExamUrl + '/Update', data).subscribe();
  }

  showCountry():Observable<any[]>{
    return this.http.get<any>(this.CountryUrl + '/Show');
  }

  deleteExam(ExamID:number){
    return this.http.post(this.ExamUrl + '/Delete', {ExamID}).subscribe();
  }

  
  
}