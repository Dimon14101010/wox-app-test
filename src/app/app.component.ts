import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PageService} from "../services/page.service";
import {reject} from "q";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemsOnPage;
  sortDirection;
  searchText;
  pages: any = [];
  pageItem: any[];
  headerdata: any = [];
  data: any = [];
  startIndex: number;
  endIndex: number;
  sortTarget = 0;
  pageTest;
  constructor (private http: HttpClient, private pageService: PageService) {

  }
  ngOnInit () {
      this.http.get('./src/data/data-source.json')
        .subscribe((response: Array<any>) => {
          this.data = response.slice(1, response.length);
          this.headerdata = response[0];
          this.setPage();
        });
  }
  setPage () {
     this.pages = this.pageService.getPage(this.data);
     this.pageItem = this.pageService.getPageService(this.data, this.searchText)
       .slice(this.pages.startIndex, this.pages.lastIndex + 1);
  }
  changePager () {
    console.log(this.pageItem, this.pageTest)
    this.pageTest = this.pageService.getPage(this.pageItem);
  }
  sortFunc(arrNumber){
    this.sortDirection = !this.sortDirection;
    this.sortTarget = arrNumber;
  }

}

