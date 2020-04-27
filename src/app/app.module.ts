import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from'@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { aboutComponent } from './about/app.aboutComponent';
import { projectComponent } from './project/app.projectComponent';
import { contactComponent } from './contact/app.contactComponent';


@NgModule({
  declarations: [
    AppComponent, 
    headerComponent, 
    navComponent, 
    contentAreaComponent, 
    footerComponent, 
    aboutComponent, 
    projectComponent, 
    contactComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { 
        path: '',
        component: contentAreaComponent
      },
      { 
        path: 'about',
        component: aboutComponent
      },
      { 
        path: 'projects',
        component: projectComponent
      },
      { 
        path: 'contact',
        component: contactComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }