import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: any, ..._args: any[]): string {
    let result = '';
    if(typeof value === 'number'){

      if (_args[1] === ',') {
        result = value.toFixed(1).toString().replace('.', ',');
      }else {
        result = value.toFixed(1).toString();
      }
      if(_args[0] === 'º'){
        result =  result + 'º';
      }else {
        result =  result + '%';
      }
      
    }else {
      result = value.toString();
      console.error('AbvPipe: [Wrong type]: ' + value.toString() + ': ' + typeof value);
      
    }
    return result;
  }

}
