import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as _ from "underscore";


@Injectable ()
export class PageService {
  constructor(private http: HttpClient) { }
  getPagination (array, searchText, currentPage = 1, itemsOnPage = 50, sortKey, sortDirect, spliceArr) {
    if (sortKey) {
        array = array.sort((a: number, b: number) => {
        if (sortKey === 2) {
        if (a[sortKey - 1] > b[sortKey - 1]) {
        if (!sortDirect){return 1;} else {return -1}
      } else if (a[sortKey - 1] < b[sortKey - 1]) {
        if (!sortDirect){return -1;} else {return 1;}
      } else {
        return 0;
      }} else {
           if (!sortDirect){return a[sortKey - 1] - b[sortKey - 1];} else {return b[sortKey - 1] - a[sortKey - 1];}
        }
        })
    };
    if (!searchText) {
      let totalItems = array.length;
      let totalPages = Math.ceil(totalItems / itemsOnPage);
      let startPage: number, lastPage: number;
      if (totalPages <= 10) {
        startPage = 1;
        lastPage = totalPages;
      } else {
        if (currentPage <= 6) {
          startPage = 1;
          lastPage = 10;
        } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          lastPage = totalPages;
        } else {
          startPage = currentPage - 5;
          lastPage = currentPage + 4;
        }
      }

      let startIndex = (currentPage - 1) * itemsOnPage;
      let lastIndex = Math.min(startIndex + itemsOnPage - 1, totalItems);
      let pages = _.range(startPage, lastPage + 1);
      console.log('pages inside', pages)
      let slicedArray
      if (spliceArr == 'big'){
        slicedArray = array;
      }else if (spliceArr == 'custom'){
        slicedArray = array.forEach((insArr) => {insArr = insArr.splice(2, 1, ''); console.log(insArr);})
      } else if (spliceArr == 'small'){
        slicedArray = array.forEach((insArr) => {insArr = insArr.splice(1, 2, '', ''); console.log(insArr);})
      }
      return {
        array,
        totalItems,
        currentPage,
        itemsOnPage,
        totalPages,
        startPage,
        lastPage,
        startIndex,
        lastIndex,
        pages
      }
    } else {
      array = array.filter(function (insideArr: Array<any>) {
        for (let i = 0; i < insideArr.length; i++) {
          if (insideArr[i].toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            return true; }
        }
      });
      let totalItems = array.length;
      let totalPages = Math.ceil(totalItems / itemsOnPage);
      let startPage: number, lastPage: number;
      if (totalPages <= 10) {
        startPage = 1;
        lastPage = totalPages;
      } else {
        if (currentPage <= 6) {
          startPage = 1;
          lastPage = 10;
        } else if (currentPage + 4 >= totalPages) {
          startPage = totalPages - 9;
          lastPage = totalPages;
        } else {
          startPage = currentPage - 5;
          lastPage = currentPage + 4;
        }
      }

      let startIndex = (currentPage - 1) * itemsOnPage;
      let lastIndex = Math.min(startIndex + itemsOnPage - 1, totalItems);
      let pages = _.range(startPage, lastPage + 1);
      console.log('pages inside', pages)

      return {
        array,
        totalItems,
        currentPage,
        itemsOnPage,
        totalPages,
        startPage,
        lastPage,
        startIndex,
        lastIndex,
        pages
      };
    }

  }
}
