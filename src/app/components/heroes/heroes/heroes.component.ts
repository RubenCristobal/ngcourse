import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {



  heroes: Hero[] = [
    new Hero('Superman', 'Clark Kent'),
    new Hero('Batman', 'Bruce Wayne'),
    new Hero('Spiderman', 'Peter Parker'),
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

}
