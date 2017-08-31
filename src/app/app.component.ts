import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  data;
  constructor (private http: HttpClient) {
    this.http.get ('test.ts')
      .subscribe ((response) => {this.data = response; console.log(this.data, response); });
  }
}

