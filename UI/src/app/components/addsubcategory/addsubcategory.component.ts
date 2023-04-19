import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SubCategoryServiceService } from 'src/app/services/subcategory-service.service';

@Component({
  selector: 'app-addsubcategory',
  templateUrl: './addsubcategory.component.html',
  styleUrls: ['./addsubcategory.component.css']
})
export class AddsubcategoryComponent {

  categoryList$!: Observable<any[]>;
  subcategoryList$!: Observable<any[]>;

  allProducts: any;
  isFetching: boolean = false;
  editMode: boolean = false; 
  Status: boolean = false;

  @Input() sub:any;
  CategoryId: number=0;
  SubCategoryName: string= "";
  currentID!: number;   
  @ViewChild('productsForm') form!: NgForm;
  @ViewChild('button') button!: ElementRef;

  ngOnInit(): void {
    this.showSubCategory();
    this.categoryList$ = this.service.showCategory();
    this.subcategoryList$ = this.service.showSubCategory();

  }

  showSubCategory(){
    this.service.showSubCategory().subscribe((products) => {  
  //     this.allProducts = products;
  //     this.isFetching = false;
  // }) 
  this.allProducts = products.map((item) => ({
    ...item,
    Status: item.Status === 2,
  }));
  this.isFetching = false;
  });
  }

  constructor(private service:SubCategoryServiceService, private router: Router) {}
  
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
    

  clearTextBox() {
      this.SubCategoryName = '';
    }
  
  addSubCategory(data:any){
    if(!this.editMode){
    var sub = {
    "SubCategoryName":this.SubCategoryName,
    "CategoryId":this.CategoryId
    }
    this.service.addSubCategory(sub).subscribe();
    setTimeout(() => {
      location.reload();
    }, 1000);
    }
    else{
      this.service.updateSubCategory(this.currentID , this.SubCategoryName , this.CategoryId);
      setTimeout(() => {
        location.reload();
      }, 1000);}  
    }

  onToggle(item:any){
      let body = {
        SubCategoryID: item.SubCategoryID,
        Status: item.Status ? 1 : 2,
      }
      this.service.statusChange(body).subscribe();
    }

  updateSubCategory(SubCategoryID:number){
      this.currentID = SubCategoryID;
      let currentProduct = this.allProducts.find((p: { SubCategoryID: number; }) => { return p.SubCategoryID === SubCategoryID});

      this.form.setValue({
        SubCategoryName: currentProduct.SubCategoryName,
        categoryId: currentProduct.CategoryID
      });

      this.editMode = true;
      window.scrollTo(0, 0);
      this.button.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }

    p = 1;
    onPageChange(event:any){
          this.p = event;
            }

  }