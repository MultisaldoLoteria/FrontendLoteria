import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { _global } from './_global';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiConciliacionService {
  url: string;

  constructor(
    private http: HttpClient
  ) { 
    this.url =_global.url;
  }
  private extractData(res: Response){
    let body = res;
    return body || {};
  }
  Post(modelo): Observable<any> {
   
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': localStorage.getItem('token')
       
      })
    };

    return this.http.post<any>(this.url + 'transacciones/tra', JSON.stringify(modelo), httpOptions).pipe();
  }
  

}
 