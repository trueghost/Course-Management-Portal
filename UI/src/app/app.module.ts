import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationControlsComponent, PaginatePipe } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListcourseComponent } from './components/listcourse/listcourse.component';
import { AddcourseComponent } from './components/addcourse/addcourse.component';
import { BasicDetailsComponent } from './components/addcourse/basic-details/basic-details.component';
import { ExamSchdComponent } from './components/addcourse/exam-schd/exam-schd.component';
import { UpdDocComponent } from './components/addcourse/upd-doc/upd-doc.component';
import { UpdImgComponent } from './components/addcourse/upd-img/upd-img.component';
import { AddcategoryComponent } from './components/addcategory/addcategory.component';
import { AddsubcategoryComponent } from './components/addsubcategory/addsubcategory.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListcourseComponent,
    AddcourseComponent,
    BasicDetailsComponent,
    ExamSchdComponent,
    UpdDocComponent,
    UpdImgComponent,
    AddcategoryComponent,
    AddsubcategoryComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    QuillModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    NgxPaginationModule
  ],
  providers: [PaginationControlsComponent, PaginatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
