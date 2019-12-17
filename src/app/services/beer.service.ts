import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Beer } from '@app/models/beer';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>('https://brj-server.herokuapp.com/api/beers');
  }

  get(id: string): Observable<Beer> {
    return this.http.get<Beer>(`https://brj-server.herokuapp.com/api/beers/${id}`);
  }

}
