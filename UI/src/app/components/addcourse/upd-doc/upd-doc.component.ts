import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DocsServiceService } from 'src/app/services/docs-service.services';

@Component({
  selector: 'app-upd-doc',
  templateUrl: './upd-doc.component.html',
  styleUrls: ['./upd-doc.component.css']
})
export class UpdDocComponent {


  constructor(private service:DocsServiceService ,private router: Router) {}

  docDetails$!:Observable<any[]>;
  docDetails:any=[];
  allProducts: any;
  isFetching: boolean = false;

  @Input() details:any;
  CourseID: number=1279;
  Path: string="";

  ngOnInit(): void {
    this.docDetails$ = this.service.showDocs();
    this.showDocs();
  }

  showDocs(){
    this.service.showDocs().subscribe((products) => {  
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


  addDocs(){
    var data = {
      "CourseID": this.CourseID,
      "Path": this.Path
    }
    this.service.addDocs(data).subscribe();
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

  deleteDocs(item:any) {
    if(confirm(`Are you sure you want to delete document ${item.DocumentID} ?`)) {
      this.service.deleteDocs(item.DocumentID);
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


