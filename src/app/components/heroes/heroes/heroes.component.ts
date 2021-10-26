import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  newHeroName = '';
  newHeroDescription = '';

  heroes: Hero[] = [
    new Hero('Superman', 'Clark Kent'),
    new Hero('Batman', 'Bruce Wayne'),
    new Hero('Spiderman', 'Peter Parker'),
  ];


  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.newHeroName !== '') {
      this.heroes.push(new Hero(this.newHeroName, this.newHeroDescription));
      this.newHeroName = '';
      this.newHeroDescription = '';
    }
  }

}
