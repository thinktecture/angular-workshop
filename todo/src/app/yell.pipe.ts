import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yell',
  standalone: true
})
export class YellPipe implements PipeTransform {

  transform(value: string, arg?: string): unknown {
    return value.toUpperCase() + (arg ?? '!!!');
  }

}
