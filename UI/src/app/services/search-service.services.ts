import { Injectable } from '@angular/core';  
import {HttpClient, HttpResponse} from '@angular/common/http';    
import {HttpHeaders} from '@angular/common/http';    
import { Observable } from 'rxjs/internal/Observable';
@Injectable({  
  providedIn: 'root'  
})  
export class SearchServiceService {  
  
  readonly SearchUrl = "https://localhost:44382/Api/Searchdata";
  
  constructor(private http : HttpClient) { }  
    
  searchdata(model : any){  
    // debugger;    
   return this.http.post<any>(this.SearchUrl + '/search',model);    
  }  
  showdata(){  
    // debugger;    
   return this.http.get<any>(this.SearchUrl + '/showdata');    
  }  

  updateDetails(data:any) {
    return this.http.put(this.SearchUrl + `/Update`, data).subscribe();
  }

  statusChange(data:any) : Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.SearchUrl + '/Status' ,data);
  }

  onlineChange(data:any) : Observable<HttpResponse<any>> {
    return this.http.post<HttpResponse<any>>(this.SearchUrl + '/Online' ,data);
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