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
  addItem(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.baseUrl}/demos/newDemo`, card);
  }
  deleteItem(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/demos/${id}`);
  }
  updateItem(card: Card): Observable<Card> {
    return this.http.put<Card>(`${this.baseUrl}/demos/${card.id}`, card);
  }

}
