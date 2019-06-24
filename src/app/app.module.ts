import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Config } from "./services/config";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomHttpInterceptor } from "./services/custom-http-interceptor";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/body/home/home.component';
import { ProjectServices } from './services/createproject/project.service';
import { ProjectComponent } from './components/body/project/project.component';
import { EndprojectComponent } from './components/body/endproject/endproject.component';
import { SteponeComponent } from './components/body/endproject/stepone/stepone.component';
import { SteptwoComponent } from './components/body/endproject/steptwo/steptwo.component';
import { StepthreeComponent } from './components/body/endproject/stepthree/stepthree.component';
import { StepfourComponent } from './components/body/endproject/stepfour/stepfour.component';
import { StepfiveComponent } from './components/body/endproject/stepfive/stepfive.component';
import { ProfileComponent } from './components/body/profile/profile.component';
import { ProfileconComponent } from './components/body/profileconfig/profileconfig.component';
import { AboutComponent } from './components/body/about/about.component';
import { CategoryComponent } from './components/body/category/category.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AuthService } from './services/auth/auth.service';
import { StartprojectComponent } from './components/body/startproject/startproject.component';
import { StartprojectServices} from './services/createproject/startproject.service';
import { UserprofileServices } from './services/userprofile/userprofile.service';
import { AdminComponent } from './components/body/admin/admin.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent,
    EndprojectComponent,
    SteponeComponent,
    SteptwoComponent,
    StepthreeComponent,
    StepfourComponent,
    StepfiveComponent,
    ProfileComponent,
    ProfileconComponent,
    AboutComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    StartprojectComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Config,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    },
    ProjectServices,
    AuthService,
    StartprojectServices,
    UserprofileServices
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
