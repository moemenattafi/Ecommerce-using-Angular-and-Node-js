import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WomanClothingService {

  constructor(private _http:HttpClient) {}
  apiUrl="http://localhost:3000/woman"

  getAllWomansClothing():Observable<any>{
    return this._http.get(this.apiUrl);
  }
}
