import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yell',
  standalone: true,
})
export class YellPipe implements PipeTransform {
  transform(value: string, args?: string) {
    const suffix = args || '!!!';
    return value + suffix;
  }
}
