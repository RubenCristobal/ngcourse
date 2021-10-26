import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable()
export class HeroesService {

  private heroes: Hero[] = [
    new Hero('Superman', 'Clark Kent'),
    new Hero('Batman', 'Bruce Wayne'),
    new Hero('Spiderman', 'Peter Parker'),
  ];

  heroes$ = new BehaviorSubject<Hero[]>(this.heroes);

  constructor() { }

  addHero(hero: Hero) {
    this.heroes.push(hero);
    this.heroes$.next(this.heroes);
  }
}
