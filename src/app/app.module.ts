import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Config } from "./services/config";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { CustomHttpInterceptor } from "./services/custom-http-interceptor";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { StartComponent } from './components/body/start/start.component';
import { ProjectServices } from './services/project/project.service';
import { ProjectComponent } from './components/body/project/project.component';
import { PopupComponent } from './components/pop-up/popup.component';
import { NewproComponent } from './components/body/newpro/newpro.component';
import { SteponeComponent } from './components/body/newpro/stepone/stepone.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    StartComponent,
    ProjectComponent,
    PopupComponent,
    NewproComponent,
    SteponeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
