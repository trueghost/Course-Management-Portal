import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageServiceService } from 'src/app/services/images-service.services';

@Component({
  selector: 'app-upd-img',
  templateUrl: './upd-img.component.html',
  styleUrls: ['./upd-img.component.css']
})
export class UpdImgComponent {

  constructor(private service:ImageServiceService ,private router: Router) {}

  imageDetails$!:Observable<any[]>;
  imageDetails:any=[];
  allProducts: any;
  isFetching: boolean = false;

  @Input() details:any;
  CourseID: number=1279;
  ImagePath: string="";

  ngOnInit(): void {
    this.imageDetails$ = this.service.showImages();
    this.showImages();
  }

  showImages(){
    this.service.showImages().subscribe((products) => {  
      this.allProducts = products;
      this.isFetching = false;
  }) 
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
  tobasicdets(){
    this.router.navigate(['basicdetails']);
    setTimeout(() => {
      location.reload();
    }, 100);
  } 
  toexmsc(){
    this.router.navigate(['examschedule']);
    setTimeout(() => {
      location.reload();
    }, 100);
  }  
  toupddoc(){
    this.router.navigate(['docupload']);
    setTimeout(() => {
      location.reload();
    }, 100);
  }  
  toupdimg(){
    this.router.navigate(['imgupload']);
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

  addImages(){
      var data = {
        "CourseID": this.CourseID,
        "ImagePath": this.ImagePath
      }
      this.service.addImages(data).subscribe();
      setTimeout(() => {
        location.reload();
      }, 1000);
    }

  url="";

  onSelectFile(img:any)
  {
    if(img.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(img.target.files[0]);
      reader.onload=(event:any)=>{
        this.url=event.target.result;
      }
    }
  }

  deleteImages(item:any) {
    if(confirm(`Are you sure you want to delete image ${item.CourseImageId} ?`)) {
      this.service.deleteImages(item.CourseImageId);
      }
    setTimeout(() => {
        location.reload();
      }, 1000);
    }

    p = 1;
    onPageChange(event:any){
          this.p = event;
            }
  

}
