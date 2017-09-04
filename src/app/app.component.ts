import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PageService} from "../services/page.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  sliceArray: any = 4;
  itemsOnPage;
  sortDirection;
  searchText;
  dataArray: any = [];
  pageItems: any[];
  @Input() headerdata: any = [];
  @Input() data: any = [];
  sortKey;
  pageBlocks;
  description;
  constructor (private http: HttpClient, private pageService: PageService) {

  }
  ngOnInit () {
      this.http.get('./src/data/data-source.json')
        .subscribe((response: Array<any>) => {
          this.data = response.slice(1, response.length);
          this.headerdata = response[0];
          this.setPage(1, this.sortKey, this.sortDirection);
        });
  }
  setPage (page, sortKey, sortDirect) {
     this.sortDirection = !this.sortDirection;
     this.dataArray = this.pageService
       .getPagination(this.data, this.searchText, page, this.itemsOnPage, sortKey, this.sortDirection);
     console.log(this.dataArray)
     this.pageItems = this.dataArray.array.slice(this.dataArray.startIndex, this.dataArray.lastIndex + 1);
     this.pageBlocks = this.dataArray.pages;
  }
  setDescription (value){
    this.description = 'item : ' + value[1] + ' --- price : ' + value[2];
  }

}

