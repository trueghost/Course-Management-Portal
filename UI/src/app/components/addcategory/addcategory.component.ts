import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryServiceService } from 'src/app/services/category-service.services';


@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent {
item: any;
allProducts: any;
isFetching: boolean = false;
editMode: boolean = false; 
  
constructor(private service:CategoryServiceService,private router: Router) {}

 CategoryName!: string;
 CategoryID!:number;
 model : any={};  
 currentID!: number;   
 Status: boolean = false;

 @ViewChild('productsForm') form!: NgForm;
 @ViewChild('button') button!: ElementRef;
 ngOnInit(): void {  
    this.showCategory();    
  }  

  showCategory(){
    this.service.showCategory().subscribe((products) => {  
        this.allProducts = products.map((item) => ({
          ...item,
          Status: item.Status === 2,
        }));
      });
      // this.allProducts = products;
      this.isFetching = false;

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
    
    textBoxValue = '';

    clearTextBox() {
      this.textBoxValue = '';
    }
  
  addupdateCategory(data:any){
    if(!this.editMode){
    this.service.addCategory(this.CategoryName);
    setTimeout(() => {
      location.reload();
    }, 1000);}
    else{
    this.service.updateCategory(this.currentID , this.CategoryName);
    setTimeout(() => {
      location.reload();
    }, 1000);}
  }

  onToggle(item:any){
    let body = {
      CategoryID: item.CategoryID,
      Status: item.Status ? 2 : 1
    }
    this.service.statusChange(body).subscribe();
  }

    updateCategory(CategoryID:number){
      this.currentID = CategoryID;
      let currentProduct = this.allProducts.find((p: { CategoryID: number; }) => { return p.CategoryID === CategoryID});

      this.form.setValue({
        CName: currentProduct.CategoryName
      });

      this.editMode = true;
      window.scrollTo(0, 0);
      this.button.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
 category:any;
 modalTitle:string = '';
 activateAddCustomersComponent:boolean = false;

    modalEdit(item:any){
      this.category = item;
      this.modalTitle = "Edit Customer";
      this.activateAddCustomersComponent = true; }

  p = 1;
  onPageChange(event:any){
    this.p = event;
      }
      
}
