import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(private http: HttpClient) {}

  private url: string = 'assets/data/userData.json';


  getUserData(): Observable<any> {
    return this.http.get(this.url);
  }

}
