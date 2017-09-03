import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {PageService} from "../services/page.service";
import {MainComponent} from "./main/main.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  providers: [PageService],
  bootstrap: [MainComponent]
})
export class AppModule { }
