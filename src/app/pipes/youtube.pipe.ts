import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

  constructor(private _dom:DomSanitizer){}

  transform(value: string,url:string): any {
/* let url:string='https://www.youtube.com/embed/'
return 'https://www.youtube.com/embed/'+value */
  return this._dom.bypassSecurityTrustResourceUrl(url+value);
  
  }
}
