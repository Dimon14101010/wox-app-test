import {Pipe , PipeTransform} from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform{
  transform(array: any[], arrIndex: number, direct): any[] {
    array.sort((a: number, b: number) => {
      if (arrIndex === 1) {
      if (a[arrIndex].toLowerCase() < b[arrIndex].toLowerCase()) {
        if (!direct){return -1;}else {return 1;}
      } else if (a[arrIndex].toLowerCase() > b[arrIndex].toLowerCase()) {
        if (!direct){return 1;}else {return -1}
      } else {
        return 0;
      }} else { if (!direct){return a[arrIndex] - b[arrIndex];} else {return b[arrIndex] - a[arrIndex]} }
    });
    return array;
  }
}
