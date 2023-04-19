import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {
  statusChanges(arg0: number) {
    throw new Error('Method not implemented.');
  }

  readonly CategoryUrl = "https://localhost:44382/Api/Category";

  constructor(private http:HttpClient) { }

  addCategory(CategoryName:string) {
    return this.http.post(this.CategoryUrl + '/Add', { CategoryName }).subscribe();
  }
  showCategory():Observable<any[]>{
    return this.http.get<any>(this.CategoryUrl + '/Show');
  }
  
  updateCategory(CategoryId : number, CategoryName:string) {
    return this.http.put(this.CategoryUrl + '/Update', {CategoryId , CategoryName}).subscribe();
  }

  statusChange(data:any) : Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.CategoryUrl + '/Status' , data);
  }
  
}
