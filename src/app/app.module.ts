import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http'
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BusinessComponent } from './business/business.component';
import { TechComponent } from './tech/tech.component';

import{PlogService} from './plog.service'

import { NotfoundComponent } from './notfound/notfound.component'
import {RouterModule , Routes} from '@angular/router';
import { SinglePlogComponent } from './single-plog/single-plog.component';
import { SubPipe } from './sub.pipe';



const appRoutes:Routes = 
[
  {
    path:'',
    component:HomeComponent
  }
  ,
  {
    path:'home',
    component:HomeComponent
  }
  ,
  {
    path:'business',
    component:BusinessComponent
  }
  ,
  {
    path:'tech',
    component:TechComponent
  }
  ,
  {
      path:'plog/:id',
      component:SinglePlogComponent    
  }
  ,
  {
    path:'**',
    component:NotfoundComponent
  }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BusinessComponent,
    TechComponent,
    NotfoundComponent,
    SinglePlogComponent,
    SubPipe
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [PlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
