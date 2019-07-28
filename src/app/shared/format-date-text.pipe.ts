import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'formatDateText'
})
export class FormatDateTextPipe implements PipeTransform {
  // adding a default value in case you don't want to pass the format then 'yyyy-MM-dd' will be used
  transform(date: string | string, day: number, format: string = 'yyyy-MM-dd'): string {

    if (date === null || date === undefined) {
      return null;
    }
    else if (date !== null) {
      let ndate = new Date(date);  // if orginal type was a string
      //  date.setDate(ndate.getDate() - day);
      return new DatePipe('en-US').transform(ndate, format);
    }
  }
}
