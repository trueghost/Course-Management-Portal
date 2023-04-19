import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicDetailsServiceService {

  readonly basicDetsUrl = "https://localhost:44382/Api/BasicDetails";

  constructor(private http:HttpClient) { }

  addDetails(data:any) {
    return this.http.post(this.basicDetsUrl + '/Add', data);
  }
  showDetails():Observable<any[]>{
    return this.http.get<any>(this.basicDetsUrl + '/Show');
  }
  
  updateDetails(data:any) {
    return this.http.put(this.basicDetsUrl + `/Update`, data).subscribe();
  }
  
  statusChange(data:any) : Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.basicDetsUrl + '/Status' ,data);
  }
  
  

  readonly CategoryUrl = "https://localhost:44382/Api/Category";

  addCategory(CategoryName:string) {
    return this.http.post(this.CategoryUrl + '/Add', { CategoryName }).subscribe();
  }
  showCategory():Observable<any[]>{
    return this.http.get<any>(this.CategoryUrl + '/Show');
  }
  
  updateCategory(data:any) {
    return this.http.put(this.CategoryUrl + `/Update`, data);
  }


  readonly SubCategoryUrl = "https://localhost:44382/Api/SubCategory";


  addSubCategory(SubCategoryName:string , CategoryId:number) {
    return this.http.post(this.SubCategoryUrl + '/Add', { SubCategoryName , CategoryId }).subscribe();
  }
  showSubCategory():Observable<any[]>{
    return this.http.get<any>(this.SubCategoryUrl + '/Show');
  }
  
  updateSubCategory(data:any) {
    return this.http.put(this.SubCategoryUrl + `/Update`, data);
  }
  
}