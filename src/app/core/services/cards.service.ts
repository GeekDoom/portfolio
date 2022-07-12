import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from 'src/app/shared/interfaces/Cards';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private baseUrl: string = environment.baseURL



  constructor(private http: HttpClient) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(`${this.baseUrl}/demos`);
  }
  addItem(card: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.baseUrl}/demos/newDemo`, card);
  }
  deleteItem(_id: string): Observable<Card> {
    return this.http.get<Card>(`${this.baseUrl}/demos/delete/${_id}`);
  }
  updateItem(card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.baseUrl}/demos/${card._id}`, card);
  }

}
