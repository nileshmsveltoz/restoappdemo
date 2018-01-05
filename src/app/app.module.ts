import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule,Routes }   from '@angular/router';
import { ImageUploadModule } from 'ng2-imageupload';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; 
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';
import { FileUploadModule } from "ng2-file-upload";
import { ConfirmdeleteComponent } from './confirmdelete/confirmdelete.component';
import { AddmenuComponent } from './addmenu/addmenu.component';



const appRoutes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'Menu', component: ProfileComponent },
  { path: 'register', component: RegistrationComponent },
  
  
];

@NgModule({
  declarations: [
    AppComponent,
    // HomeComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    NavComponent,
    ConfirmdeleteComponent,
    AddmenuComponent,
    
  ],
  imports: [
    BrowserModule,HttpModule ,Ng2SearchPipeModule,Ng2OrderModule,FileUploadModule,
    ImageUploadModule, FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
 
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ AddmenuComponent ]
})
export class AppModule { 
  
}
