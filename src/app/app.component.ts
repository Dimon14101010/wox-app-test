import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SearchPipe} from "../pipes/search.pipe";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsOnPage = 50;
  pages = [];
  data: any = [];
  constructor (private http: HttpClient) {

  }
  ngOnInit () {
      this.http.get('./src/data/data-source.json')
        .subscribe(response => {
          this.data = response;
          this.pages = new Array(Math.ceil(this.data.length / this.itemsOnPage));
        });


  }
  show() {
    console.log (this.data);
  }
}

