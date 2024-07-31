import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date | string, format: string): string{
    const date = new Date(value);
    const day =date. getDate();
    const month = date.getMonth();
    const year = date.getFullYear(); 
    if (format === 'MM/DD/YYYY') {
      return `${month}/${day}/${year}`;
    } else if (format === 'DD/MM/YYYY') {
      return `${day}/${month}/${year}`;
    } else if (format === 'YYYY/MM/DD') {
      return `${year}/${month}/${day}`;
    } else {
      return date.toDateString(); // Default format
    }
  }
  }


