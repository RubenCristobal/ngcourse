import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroesService) { 
    this.heroService.heroes$.subscribe(heroes => this.heroes = this.heroService.getHeroes());
  }

  ngOnInit(): void {
  }

  addHero(hero: Hero) {
    this.heroService.addHero(hero);
  }

  removeHero(index: number) {
    this.heroService.removeHero(index);
  }

}
