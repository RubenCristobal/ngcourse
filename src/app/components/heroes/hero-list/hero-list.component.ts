import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  @Input() heroList: Hero[] = [];
  @Output() onRemoveHero = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  removeHero(index: number) {
    // this.heroList.splice(index, 1);
    this.onRemoveHero.emit(index);
    // TODO: remove hero from server
  }

}
