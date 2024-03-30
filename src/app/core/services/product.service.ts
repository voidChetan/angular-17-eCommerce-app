import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'https://freeapi.gerasim.in/api/BigBasket/';

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<APIResponseModel> {
    debugger;
    return this.http.get<APIResponseModel>(`${this.apiUrl}GetAllProducts`);
  }


}
