import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { BasicDetailsComponent } from './components/addcourse/basic-details/basic-details.component';
import { ExamSchdComponent } from './components/addcourse/exam-schd/exam-schd.component';
import { UpdDocComponent } from './components/addcourse/upd-doc/upd-doc.component';
import { UpdImgComponent } from './components/addcourse/upd-img/upd-img.component';
import { AddsubcategoryComponent } from './components/addsubcategory/addsubcategory.component';
import { HomeComponent } from './components/home/home.component';
import { ListcourseComponent } from './components/listcourse/listcourse.component';
import { HomeGuard } from './components/home/home.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
{ path:'login', component: LoginComponent , pathMatch: 'full'  },
{ path: '', component: HomeComponent, pathMatch: 'full', canActivate: [HomeGuard] },
{ path:'home', component:HomeComponent},
{ path:'addcourse', component:AddcourseComponent },
{ path:'listcourse', component:ListcourseComponent },
{ path:'addcategory', component:AddcategoryComponent },
{ path:'addsubcategory', component:AddsubcategoryComponent },
{ path:'basicdetails', component:BasicDetailsComponent },
{ path:'examschedule', component:ExamSchdComponent },
{ path:'docupload', component:UpdDocComponent },
{ path:'imgupload', component:UpdImgComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
