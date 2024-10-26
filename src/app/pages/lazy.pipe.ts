import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lazy',
  standalone: true
})
export class LazyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
