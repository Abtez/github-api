import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCalc'
})
export class TimeCalcPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
