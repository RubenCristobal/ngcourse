import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';
import { TrivialService } from 'src/app/services/trivial.service';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss']
})
export class TrivialComponent implements OnInit {

  cards: Card[] = [];

  constructor(private service: TrivialService) { }

  ngOnInit(): void {
    this.service.getTrivial();
    this.service.cards$.subscribe(data => {this.cards = data; });
  }

}
