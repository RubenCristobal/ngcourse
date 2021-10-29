import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class TrivialService {

  cards: Card[] = [];
  cards$ = new BehaviorSubject<Card[]>(this.cards);

  constructor(private http: HttpClient) { }

  getTrivial(): void {
    this.http.get('https://opentdb.com/api.php?amount=10').subscribe(
      (data: any) => {
        let temp: Card[] = []
        temp = data.results.map((json:any) => new Card(json));
        this.cards = [...temp];
        this.cards$.next(this.cards);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
