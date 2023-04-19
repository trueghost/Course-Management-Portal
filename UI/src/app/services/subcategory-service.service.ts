import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryServiceService {

  readonly SubCategoryUrl = "https://localhost:44382/Api/SubCategory";

  constructor(private http:HttpClient) { }

  showSubCategory():Observable<any[]> {
    return this.http.get<any>(this.SubCategoryUrl + '/Show');
  }
 
  addSubCategory(data:any) {
    return this.http.post(this.SubCategoryUrl + '/Add', data);
  }
  
  updateSubCategory(SubCategoryID:number, SubCategoryName:string , CategoryId : number) {
    return this.http.put(this.SubCategoryUrl + '/Update', {SubCategoryID, SubCategoryName, CategoryId}).subscribe();
  }

  statusChange(data:any) : Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.SubCategoryUrl + '/Status' ,data);
  }

  readonly CategoryUrl = "https://localhost:44382/Api/Category";

  showCategory():Observable<any[]>{
    return this.http.get<any>(this.CategoryUrl + '/Show');
  }
  
  
}
