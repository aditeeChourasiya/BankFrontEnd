import { NgModule } from '@angular/core';
//provides services that are essential to launch and run a browser application
import { BrowserModule } from '@angular/platform-browser';
//to perform HTTP requests and easily manipulate those requests and their responses.
import { HttpClientModule } from '@angular/common/http';
//an NgModule where you can configure your routes.
import { AppRoutingModule } from './app-routing.module';
//To use Angular Material for table and pagination
import { MaterialComponentsModule } from 'src/material-components/material-components.module';
import { AppComponent } from './app.component';
import { Bankv2Component } from './bankv2/bankv2.component';
import { Bankv1Component } from './bankv1/bankv1.component';

@NgModule({
  declarations: [
    AppComponent,
    Bankv2Component,
    Bankv1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialComponentsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
