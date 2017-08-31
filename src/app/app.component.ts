import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  data = {};
  constructor (private http: HttpClient) {}
  ngOnInit () {
      this.http.get('./src/data/data-source.json')
        .subscribe(response => {
          this.data = response;
          console.log(this.data, response);
        });
  }
  show() {
    console.log (this.data);
  }
}

