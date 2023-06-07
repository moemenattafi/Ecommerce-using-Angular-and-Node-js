import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KidsClothingService {

  constructor(private _http:HttpClient) {}
  apiUrl="http://localhost:3000/kids";

  getAllKidsClothing():Observable<any>{
    return this._http.get(this.apiUrl);
  }
  
}
