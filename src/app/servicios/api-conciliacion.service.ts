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
token = 'Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjMxMDEzNzY4MTQiLCJuYmYiOjE2MjM1NTAyNTMsImV4cCI6MTYyMzU1Mzg1MywiaWF0IjoxNjIzNTUwMjUzLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjQ5MjIwIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo0OTIyMCJ9.-eG3idSSg2HpNE3T8-UDIuv9fTnz15dNGz7PVoBSeb0'
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
        'content-type': 'application/json',
        'Authorization': this.token,
        
       
      })
    };

    return this.http.post<any>(this.url + '', JSON.stringify(modelo), httpOptions);
  }
  

}
 