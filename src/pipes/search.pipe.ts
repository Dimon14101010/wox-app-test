import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(value: Array<any>, searchText: string, startIndex: number, endIndex: number): any {
    if (!searchText) {
      return value.slice(startIndex, endIndex);
    } else {
      return value.filter(function (insideArr: Array<any>) {
        for (let i = 0; i < insideArr.length; i++) {
          if (insideArr[i].toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
          return true; }
        }
       }).slice(startIndex, endIndex) ;
    }

  }

}
