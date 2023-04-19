import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {

name!: any;

constructor(private http: HttpClient,private router: Router) {
  this.http.get<any>('https://localhost:7082/api/User/show').subscribe(data => {
    this.name = data;
  });
}

tohome() {
  this.router.navigate(['home']);
  setTimeout(() => {
    location.reload();
  }, 1);
  }
toaddcourse() {
this.router.navigate(['addcourse']);
setTimeout(() => {
  location.reload();
}, 100);
}
tolistcourse() {
  this.router.navigate(['listcourse']);
  setTimeout(() => {
    location.reload();
  }, 100);
  }
toaddcategory() {
  this.router.navigate(['addcategory']);
  setTimeout(() => {
    location.reload();
  }, 100);
  }  
toaddsubcategory() {
  this.router.navigate(['addsubcategory']);
  setTimeout(() => {
    location.reload();
  }, 100);
  }  
logout() {
    if(confirm(`Are you sure you want to logout ?`)){
    this.router.navigate(['/login']);
    this.router.resetConfig([
      {path: '', redirectTo: '/login', pathMatch: 'full'},
    ]);
  }
  }

}
