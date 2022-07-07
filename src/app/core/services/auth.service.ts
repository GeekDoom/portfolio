import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthResponse, User } from 'src/app/shared/interfaces/Auth';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseURL

  private _user!: User;

  constructor(private http: HttpClient) { }


  get user() {
    return { ...this._user };
  }




  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password }
    return this.http.post<AuthResponse>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
            localStorage.setItem('token', resp.token!)
            this._user = {
              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
        map(valid => valid.ok),
        catchError(err => of(err.error.msg))
      );
  }


  validateToken() {
    const url = `${this.baseUrl}/auth`;
    const headers = new HttpHeaders()
      .set('security-x', localStorage.getItem('token') || '')

    return this.http.get<AuthResponse>(url, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem('token', resp.token!)
          this._user = {
            name: resp.name!,
            uid: resp.uid!
          }
          return resp.ok
        }),
        catchError(err => of(false))
      )
  }

  logout() {
    localStorage.removeItem('token');
  }

}
