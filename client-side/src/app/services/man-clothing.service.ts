import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ManClothingService {


  constructor(private _http:HttpClient) {}
    //linking backend to frontend

    apiUrl="http://localhost:3000/man";


    getAllManClothing():Observable<any>{
      return this._http.get(`${this.apiUrl}`);
    }

}
