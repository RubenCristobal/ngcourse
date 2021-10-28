import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Beer } from '../model/beer';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private beers: Beer[] = [];
  beers$ = new BehaviorSubject<Beer[]>(this.beers); 
  private data: any;

  constructor(private http: HttpClient) { }

  getBeers() {
    this.http.get('https://api.punkapi.com/v2/beers').subscribe(
      (data) => {
        this.data = data;
        this.processBeers();
        this.beers$.next(this.beers);
      }, (error) => {
        console.log(error);
      }
    );
  }

  private processBeers() {
    this.data.forEach((beer:any) => {
      this.beers.push(new Beer(beer.name, beer.description, beer.abv, beer.tagline, beer.image_url));
    });
  }

  anyBeers() {
    return this.beers.length > 0;
  }
}
