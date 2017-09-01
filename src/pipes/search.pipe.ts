import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(value: Array<any>, searchText: string, row: Array<any>): any {
    if (!searchText) {
      return value;
    } else {
      return value.filter(function (insideArr: Array<any>) {
        return insideArr.indexOf(searchText) > -1;
       });
    }
  }

}
