import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddingNewCustomerService {

  constructor(private _http:HttpClient) {}
  apiUrl="http://localhost:3000/newCustomer";

  addNewCustomer(data:any):Observable<any>{
    return this._http.post(`${this.apiUrl}`,data);
  }

}
