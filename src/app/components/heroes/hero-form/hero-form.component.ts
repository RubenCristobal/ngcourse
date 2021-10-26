import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  @Output() onAddHero = new EventEmitter<Hero>();

  newHeroName = '';
  newHeroDescription = '';

  constructor() { }

  ngOnInit(): void {
  }

  addHero() {
    if (this.newHeroName.length > 0) {
      const newHero = new Hero(this.newHeroName, this.newHeroDescription);
      this.onAddHero.emit(newHero);
      this.newHeroName = '';
      this.newHeroDescription = '';

    }
  }

}
