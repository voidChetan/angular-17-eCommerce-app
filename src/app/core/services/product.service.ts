import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { APIResponseModel } from '../model/Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'https://freeapi.gerasim.in/api/BigBasket/';

  onCartUpdated$: Subject<boolean> = new Subject<boolean>()  ;

  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<APIResponseModel> {
    debugger;
    return this.http.get<APIResponseModel>(`${this.apiUrl}GetAllProducts`);
  }

  getAllcategory(): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(`${this.apiUrl}GetAllCategory`);
  }

  getAllProductsByCategoryId (categoryId: number): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(`${this.apiUrl}GetAllProductsByCategoryId?id=${categoryId}`);
  } 
 
  onRegister (obj: any): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(`${this.apiUrl}RegisterCustomer`, obj);
  } 

  onLogin (obj: any): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(`${this.apiUrl}login`, obj);
  } 
 
  onAddToCart (obj: any): Observable<APIResponseModel>{
    return this.http.post<APIResponseModel>(`${this.apiUrl}AddToCart`, obj);
  } 

  getCartDataByCustId (custId: number): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(`${this.apiUrl}GetCartProductsByCustomerId?id=${custId}`);
  } 
 
  removeProduct (cartId: number): Observable<APIResponseModel>{
    return this.http.get<APIResponseModel>(`${this.apiUrl}DeleteProductFromCartById?id=${cartId}`);
  } 

}
