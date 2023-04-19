import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocsServiceService {

  readonly DocsUrl = "https://localhost:44382/Api/Documents";

  constructor(private http:HttpClient) { }

  addDocs(data:any) {
    return this.http.post(this.DocsUrl + '/Add', data);
  }
  showDocs():Observable<any[]>{
    return this.http.get<any>(this.DocsUrl + '/Show');
  }
  deleteDocs(DocumentID:number){
    return this.http.post(this.DocsUrl + '/Delete', {DocumentID}).subscribe();
  }

}