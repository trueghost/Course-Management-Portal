import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExamServiceService } from 'src/app/services/exam-service.services';

@Component({
  selector: 'app-exam-schd',
  templateUrl: './exam-schd.component.html',
  styleUrls: ['./exam-schd.component.css']
})
export class ExamSchdComponent {

  constructor(private service:ExamServiceService ,private router: Router) {}

  allProducts: any;
  isFetching: boolean = false;
  editMode: boolean = false; 
  currentID!: number;   
  @ViewChild('productsForm') form!: NgForm;
  @ViewChild('button') button!: ElementRef;

  examDetails$!:Observable<any[]>;
  countryDetails$!:Observable<any[]>;

  examList$!:Observable<any[]>;
  countryList$!:Observable<any[]>;

  examDetails:any=[];
  countryDetails:any=[];

  @Input() details:any;
  CourseID: number=0;
  CountryID!: number;
  Location: string= "";
  Examdate!: Date;
  Amount!: number;
  UserID!: number;

  examDetailsMap:Map<number, string> = new Map()
  countryDetailsMap:Map<number, string> = new Map()

  ngOnInit(): void {
    this.countryList$ = this.service.showCountry();
    this.examList$ = this.service.showExam();
    this.showExam();
    this.countryDetails$ = this.service.showCountry();
    this.refreshcountryDetailsMap();
  }

  showExam(){
    this.service.showExam().subscribe((products) => {  
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

  refreshcountryDetailsMap(){
    this.service.showCountry().subscribe(data =>{
      this.countryDetails = data;
      
      for(let i=0; i< data.length; i++)
      {
        this.countryDetailsMap.set(this.countryDetails[i].CountryID,this.countryDetails[i].
          CountryName);
      }
    })
  }

  addExam(data:any){
    if(!this.editMode){
    var details = {
    "CourseId" : this.CourseID,
    "CountryID" : this.CountryID,
    "Location" : this.Location,
    "Examdate" : this.Examdate,
    "Amount" : this.Amount
  }
  this.service.addExam(details).subscribe();
  console.log(details);
  setTimeout(() => {
    location.reload();
  }, 1000);}

  else{
    var detailse = {
    "ExamID" : this.currentID,  
    "CourseId" : this.CourseID,
    "CountryID" : this.CountryID,
    "Location" : this.Location,
    "Examdate" : this.Examdate,
    "Amount" : this.Amount
    }
    this.service.updateExam(detailse);
    setTimeout(() => {
      location.reload();
    }, 1000);}
}

  updateExam(ExamID:number){
    this.currentID = ExamID;
    let currentProduct = this.allProducts.find((p: { ExamID: number; }) => { return p.ExamID === ExamID});

  this.form.setValue({
    countryId : currentProduct.CountryID,
    location : currentProduct.Location,
    date : currentProduct.Examdate,
    amount : currentProduct.Amount
  });

  this.editMode = true;
  window.scrollTo(0, 0);
  this.button.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  
  deleteExam(item:any) {
      if(confirm(`Are you sure you want to delete details ${item.ExamID} ?`)) {
        this.service.deleteExam(item.ExamID);
        }
      }
  p = 1;
  onPageChange(event:any){
        this.p = event;
          }


}



