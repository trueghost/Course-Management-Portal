import { Component, ViewChild, ElementRef, Input, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BasicDetailsServiceService } from 'src/app/services/basicdetails-service.services';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.css']
})
export class BasicDetailsComponent implements OnInit {

  constructor(private service:BasicDetailsServiceService ,private router: Router) {}

  @ViewChild('accordionItem', {static: true}) accordionItem!: ElementRef;

  scrollToAccordionItem() {
    this.accordionItem.nativeElement.scrollIntoView({behavior: 'smooth'});
  }

  allProducts: any;
  isFetching: boolean = false;
  Trending: boolean = false;
  editMode: boolean = false; 
  currentID!: number;   
  @ViewChild('productsForm') form!: NgForm;
  @ViewChild('button') button!: ElementRef;
  
  categoryDetails$!:Observable<any[]>;
  subCategoryDetails$!:Observable<any[]>;
  basicDetails$!:Observable<any[]>;

  basicDetails:any=[];
  categoryDetails:any=[];
  subCategoryDetails:any=[];
  
  @Input() details:any;
  courseId: number=0;
  Title: string= "";
  CategoryID!: number;
  SubCategoryID!: number;
  Overview: any;
  Metatitle: string="";
  Metakeywords: string="";
  Metadescription: string="";

  // Mapping
  categoryDetailsMap:Map<number, string> = new Map()
  subcategoryDetailsMap:Map<number, string> = new Map()
  basicDetailsMap:Map<number, string> = new Map()
  BasicDetailsServiceService: any;

  ngOnInit(): void {
    this.categoryList$ = this.service.showCategory();
    this.subCategoryList$ = this.service.showSubCategory();
    this.categoryDetails$ = this.service.showCategory();
    this.showDetails();
    this.subCategoryDetails$ = this.service.showSubCategory();
    this.basicDetails$ = this.service.showDetails();
    this.refreshcategoryDetailsMap();
    this.refreshsubcategoryDetailsMap(); 
  } 

  showDetails(){
    this.service.showDetails().subscribe((products) => {  
  //     this.allProducts = products;
  //     this.isFetching = false;
  // }) 
  this.allProducts = products.map((item) => ({
    ...item,
    Trending: item.Trending === 2,
  }));
  this.isFetching = false;
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


  refreshcategoryDetailsMap(){
    this.service.showCategory().subscribe(data =>{
      this.categoryDetails = data;
      
      for(let i=0; i< data.length; i++)
      {
        this.categoryDetailsMap.set(this.categoryDetails[i].CategoryID,this.categoryDetails[i].
          CategoryName);
      }
    })
  }

  refreshsubcategoryDetailsMap(){
    this.service.showSubCategory().subscribe(data =>{
      this.subCategoryDetails = data;
      
      for(let i=0; i< data.length; i++)
      {
        this.subcategoryDetailsMap.set(this.subCategoryDetails[i].SubCategoryID,this.subCategoryDetails[i].
          SubCategoryName);
      }
    })
  }
  

  modalTitle:string = '';
  activateAddDetailsComponent:boolean = false;

  modalAdd(){
    this.details = {
      courseId:0,
      title:null,
      CategoryID:null,
      SubCategoryID:null,
      Overview:null,
      MetaTitle:null,
      MetaKeyword:null,
      MetaDescription:null
    }
    this.modalTitle = "Add Details";
    this.activateAddDetailsComponent = true;
  }

  modalEdit(item:any){
    this.details = item;
    this.modalTitle = "Edit Details";
    this.activateAddDetailsComponent = true;
  }

  modalClose(){
    this.activateAddDetailsComponent = false;
    this.basicDetails$ = this.service.showDetails();
  }

  categoryList$!:Observable<any[]>;
  subCategoryList$!:Observable<any[]>;
  basicList$!:Observable<any[]>;  


  addDetails(data:any){
    if(!this.editMode){
    var details = {
    "title" : this.Title,
    "CategoryID" : this.CategoryID,
    "SubCategoryID" : this.SubCategoryID,
    "Overview" : this.Overview,
    "MetaTitle" : this.Metatitle,
    "Metakeywords" : this.Metakeywords,
    "MetaDescription" : this.Metadescription
  }
  this.service.addDetails(details).subscribe();
  setTimeout(() => {
    location.reload();
  }, 1000);}

  else{
    var detailse = {
      "courseId" : this.currentID,
      "title" : this.Title,
      "CategoryID" : this.CategoryID,
      "SubCategoryID" : this.SubCategoryID,
      "Overview" : this.Overview,
      "MetaTitle" : this.Metatitle,
      "Metakeywords" : this.Metakeywords,
      "MetaDescription" : this.Metadescription
    }
    this.service.updateDetails(detailse);
    setTimeout(() => {
      location.reload();
    }, 1000);}
   
}

updateCourse(CourseID:number){
  this.currentID = CourseID;
  let currentProduct = this.allProducts.find((p: { CourseID: number; }) => { return p.CourseID === CourseID});

  this.form.setValue({
    Title: currentProduct.Title,
    CategoryID : currentProduct.CategoryID,
    SubCategoryID : currentProduct.SubcategoryID,
    Overview : currentProduct.Overview,
    Metatitle : currentProduct.Metatitle,
    Metakeywords : currentProduct.Metakeywords,
    Metadescription : currentProduct.Metadescription
    
  });

  this.editMode = true;
  window.scrollTo(0, 0);
  this.button.nativeElement.scrollIntoView({ behavior: 'smooth' });
}

onToggle(item:any){
  let body = {
    CourseID: item.CourseID,
    Trending: item.Trending ? 1 : 2,
  }
  this.service.statusChange(body).subscribe();
}

p = 1;
onPageChange(event:any){
  this.p = event;
    }

}
