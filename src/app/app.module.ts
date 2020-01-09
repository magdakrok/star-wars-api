import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { EmployessBrowserComponent } from './employess/employess-browser/employess-browser.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2SwapiModule } from 'angular2-swapi';


@NgModule({
  declarations: [
    AppComponent,
    EmployessBrowserComponent,
  ],
  imports: [
    
    CommonModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    Angular2SwapiModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
