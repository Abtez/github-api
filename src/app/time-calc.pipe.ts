import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCalc'
})
export class TimeCalcPipe implements PipeTransform {

  transform(value: any,): Number {
    let today:Number = Date.now();
    
    if (today){
      return today;
    }else{
      return 0;
    }
  }

}
