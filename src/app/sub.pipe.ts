import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sub'
})
export class SubPipe implements PipeTransform {

  transform(term:string,limit:number): string {
    return term.substring(0,limit).concat("...")
  }

}
