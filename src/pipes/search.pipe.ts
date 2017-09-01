import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(items: any, searchText: any): any {
    if (searchText == null) {return items; }

    return items.filter(function(row){
      console.log('row', row);
      return row.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    });
  }
}

