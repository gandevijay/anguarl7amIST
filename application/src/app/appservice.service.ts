import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {IData} from './IData'
import { IUser } from './IUser';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  private _jsonURL ="../../assets/data/students.json";
  private _usersURL ="https://jsonplaceholder.typicode.com/users";

  constructor(private http : HttpClient) {
      this.getJsonData();
  }

  public getJsonData():Observable<IData[]>{
     return this.http.get<IData[]>(this._jsonURL);
  }

  public getLoadUsers():Observable<IUser[]>{
    return this.http.get<IUser[]>(this._usersURL);
  }
}
