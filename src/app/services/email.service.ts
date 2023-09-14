import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
// import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private url = "";
  constructor(private _http: HttpClient){}
 
  SendEmail(input: any) :Observable<any>{
    return this._http.post(this.url, input);
    // .pipe(
    //   map((response) => response,
    //       (error) => error
    //   )
    //     )
      }
}
