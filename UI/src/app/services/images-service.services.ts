import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  readonly ImagesUrl = "https://localhost:44382/Api/Images";

  constructor(private http:HttpClient) { }

  addImages(data:any) {
    return this.http.post(this.ImagesUrl + '/Add', data);
  }
  showImages():Observable<any[]>{
    return this.http.get<any>(this.ImagesUrl + '/Show');
  }

  deleteImages(CourseImageId:number){
    return this.http.post(this.ImagesUrl + '/Delete', {CourseImageId}).subscribe();
  }

}