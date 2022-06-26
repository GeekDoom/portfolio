import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseURL

  constructor(private http: HttpClient) { }


  login() {
    return this.http.get(`${this.baseUrl}/users`)
  }

}
