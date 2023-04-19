import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchServiceService } from 'src/app/services/search-service.services';

@Component({
  selector: 'app-listcourse',
  templateUrl: './listcourse.component.html',
  styleUrls: ['./listcourse.component.css']
})
export class ListcourseComponent {

constructor(private service:SearchServiceService,private router: Router) {}

allProducts: any;
isFetching: boolean = false;
editMode: boolean = false; 
currentID!: number;
Trending: boolean = false;
ShowOnline: boolean = false;   
@ViewChild('addClientForm') form!: NgForm;
@ViewChild('button') button!: ElementRef;

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

  model : any={};    
  emp:any;  

  categoryDetails$!:Observable<any[]>;
  subCategoryDetails$!:Observable<any[]>;

  categoryDetails:any=[];
  subCategoryDetails:any=[];

  categoryDetailsMap:Map<number, string> = new Map()
  subcategoryDetailsMap:Map<number, string> = new Map()


  @Input() details:any;
  courseId: number=0;
  Title: string= "";
  CategoryID!: number;
  SubCategoryID!: number;
  Overview: any;
  Metatitle: string="";
  Metakeywords: string="";
  Metadescription: string="";
  
  ngOnInit(): void {  
    this.showdata();  
    this.categoryDetails$ = this.service.showCategory();
    this.subCategoryDetails$ = this.service.showSubCategory();
    this.refreshcategoryDetailsMap();
    this.refreshsubcategoryDetailsMap(); 
  }  
  showdata()  
  {  
    this.service.showdata().subscribe((products) => {  
  //     this.allProducts = products;
  //     this.isFetching = false;
  // }) 
  this.allProducts = products.map((item:any) => ({
    ...item,
    Trending: item.Trending === 2,
    ShowOnline: item.ShowOnline === 2,
  }));
  this.isFetching = false;
  });
  }  
  searchdata(data:any) {  
    if(!this.editMode){
    this.service.searchdata(this.model).subscribe((res: any) => {  
             this.allProducts=res;   
        console.log(this.allProducts);  }) 
    }

    else{
      var details = {
        "CourseID" : this.currentID,
        "Title" : this.model.Title,
        "CategoryID" : this.model.CategoryID,
        "SubCategoryID" : this.model.SubCategoryID,
      }
      this.service.updateDetails(details);
      setTimeout(() => {
        location.reload();
      }, 1000);
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
  
  updateCourse(CourseID:number){
    this.currentID = CourseID;
    let currentProduct = this.allProducts.find((p: { CourseID: number; }) => { return p.CourseID === CourseID});
  
    this.form.setValue({
      Title: currentProduct.Title,
      CategoryID : currentProduct.CategoryID,
      SubCategoryID : currentProduct.SubcategoryID
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

  onToggled(item:any){
    let body = {
      CourseID: item.CourseID,
      Online: item.ShowOnline ? 1 : 2,
    }
    this.service.onlineChange(body).subscribe();
  }

  p = 1;
    onPageChange(event:any){
          this.p = event;
            }



}

