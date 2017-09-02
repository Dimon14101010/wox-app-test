import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsOnPage = 50;
  sortDirection;
  searchText;
  pages = [];
  headerdata: any = [];
  data: any = [];
  startIndex: number;
  endIndex: number;
  sortTarget = 0;
  constructor (private http: HttpClient) {

  }
  ngOnInit () {
      this.http.get('./src/data/data-source.json')
        .subscribe((response: Array<any>) => {
          this.data = response.slice(1, response.length);
          this.headerdata = response[0];
          this.pages = new Array(Math.ceil(this.data.length / this.itemsOnPage));
        });
      this.startIndex = 0;
      this.endIndex = this.itemsOnPage;


  }
  sortFunc(arrNumber){
    this.sortDirection = !this.sortDirection;
    this.sortTarget = arrNumber;
  }
  nextPage (){
    this.startIndex += this.itemsOnPage;
    this.endIndex += this.itemsOnPage;
  }
  prevPage (){
    this.startIndex -= this.itemsOnPage;
    this.endIndex -= this.itemsOnPage;
  }
  setPage (page){
    this.startIndex = (page) * this.itemsOnPage;
    this.endIndex = (this.startIndex + this.itemsOnPage);
  }
}

