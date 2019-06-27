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
import { HomeprojectsServices } from './services/homeprojects/homeprojects.service';
import { ProjectscategoryServices } from './services/projectscategory/projectscategory.service';
import { EndprojectServices } from './services/endproject/endproject.service';
import { DataprojectServices } from './services/dataproject/dataproject.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectComponent,
    EndprojectComponent,
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
    AuthService, // Login - Register
    StartprojectServices, // Crear proyecto (4 datos)
    UserprofileServices, // Traer todos los proyectos de un usuario y todo lo relacionado a él
    HomeprojectsServices, // Todos los proyectos
    ProjectscategoryServices, // Proyectos por categoria
    EndprojectServices,
    DataprojectServices
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
