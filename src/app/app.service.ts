import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  _http: any;

  constructor(private httpClient: HttpClient) { }

  public getProducts(filename: string): Observable<any> {
    return this.httpClient.get("assets/mock/" + filename + ".json");
  }

  public getCartProducts(filename: string): Observable<any> {
    return this.httpClient.get("assets/mock/" + filename + ".json");
  }
}