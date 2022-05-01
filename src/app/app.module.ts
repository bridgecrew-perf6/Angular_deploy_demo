import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import {HttpClientModule} from '@angular/common/http';
import { NewsapiserviceComponent } from './services/newsapiservice/newsapiservice.component';
import { TechnewsComponent } from './technews/technews.component'
@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    NewsapiserviceComponent,
    TechnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [NewsapiserviceComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
