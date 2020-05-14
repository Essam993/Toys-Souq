import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

import { Api } from './api.request'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getData(serviceName: any): Observable<[]> {
    return this.http
      .get<[]>(Api.baseUrl + serviceName);
  }

  postData(serviceName: any, detail: any): Observable<[]> {
    return this.http
      .post<[]>(Api.baseUrl + serviceName, detail);
  }
  // login(serviceName: any, postData: any,requestOptions:any ): Observable<[]> {
  //   // console.log(detail);
  //   // return this.http
  //   //   .post<[]>(serviceName, detail);

  //   let data =  this.http.post<[]>(serviceName, postData, requestOptions)
  //     .subscribe(data => {
  //       console.log(data['_body']);
  //       return data;
  //      }, error => {
  //       return error;
  //       console.log(error);
  //     });
  //     return;
  // }
  

}
