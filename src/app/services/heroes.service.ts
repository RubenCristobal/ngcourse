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

  heroNumber = this.heroes.length;

  heroes$ = new BehaviorSubject<number>(this.heroNumber);

  constructor() { }

  addHero(hero: Hero) {
    this.heroes.push(hero);
    this.heroes$.next(this.heroNumber);
  }

  removeHero(index: number) {
    this.heroes.splice(index, 1);
    this.heroes$.next(this.heroNumber);
  }

  getHeroes() {
    return [...this.heroes];
  }
}
