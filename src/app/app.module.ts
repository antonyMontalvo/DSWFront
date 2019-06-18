import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Config } from "./services/config";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomHttpInterceptor } from "./services/custom-http-interceptor";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartComponent } from './components/body/start/start.component';
import { ProjectServices } from './services/project/project.service';
import { ProjectComponent } from './components/body/project/project.component';
import { PopupComponent } from './components/pop-up/popup.component';
import { NewproComponent } from './components/body/newpro/newpro.component';
import { SteponeComponent } from './components/body/newpro/stepone/stepone.component';
import { SteptwoComponent } from './components/body/newpro/steptwo/steptwo.component';
import { StepthreeComponent } from './components/body/newpro/stepthree/stepthree.component';
import { StepfourComponent } from './components/body/newpro/stepfour/stepfour.component';
import { StepfiveComponent } from './components/body/newpro/stepfive/stepfive.component';
import { ProfileComponent } from './components/body/profile/profile.component';
import { ProfileconComponent } from './components/body/profilecon/profilecon.component';
import { AboutComponent } from './components/body/about/about.component';
import { CategoryComponent } from './components/body/category/category.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StartComponent,
    ProjectComponent,
    PopupComponent,
    NewproComponent,
    SteponeComponent,
    SteptwoComponent,
    StepthreeComponent,
    StepfourComponent,
    StepfiveComponent,
    ProfileComponent,
    ProfileconComponent,
    AboutComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    Config,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    },
    ProjectServices
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
