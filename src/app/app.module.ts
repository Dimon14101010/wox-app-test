import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {SearchPipe} from "../pipes/search.pipe";
import {FormsModule} from "@angular/forms";
import {SortPipe} from "../pipes/sort.pipe";

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
