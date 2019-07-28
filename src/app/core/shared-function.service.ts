import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class SharedFunctionService {
  constructor(private translate: TranslateService) { }
  private getTranslationData(myKey: string) {
    // let translation = "";
    // let cTranslation = this.translate.get(myKey).subscribe(res => {
    //   translation = res;
    //   return translation;
    // });

    // this.translate.get('HOME.HELLO3', { value: 'world' }).subscribe((res: string) => {
    //   console.log(res);
    //   //=> 'hello world'
    // });

    return this.translate.get(myKey);
  }
  private getTranslatData(myKey: string, data: any) {
    let tanslat = '';
    return this.translate.get(myKey, data);
    //   console.log(res);
  }
  public getTranslation(myKey: string): string {
    let data: string = '';
    this.getTranslationData(myKey).subscribe(res => data = res);
    return data;
  }
  public getTranslationWithData(myKey: string, data: any): string {
    let val: string = '';
    this.getTranslatData(myKey, data).subscribe(res => val = res);
    return val;
  }

}
