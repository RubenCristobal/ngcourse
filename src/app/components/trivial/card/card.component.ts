import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card = new Card();

  constructor() { }

  ngOnInit(): void {
  }

  handleAnswer(answer: string, i: number) {
    this.card.responded = true; 
    this.card.response = answer;
    
    if(answer === this.card.rightAnswer) {
      this.card.correct = true;
    }

  }

  getClass(answer: string) {
    // console.log(answer + ' -> ' + this.card.response);
    
    if(!this.card.responded) {
      return 'btn btn-primary btn-block';
    }else {
      if(answer === this.card.rightAnswer) {
        return 'btn btn-success btn-block';
      }else if(answer === this.card.response && !this.card.correct) {
        return 'btn btn-danger btn-block';
      }else {
        return 'btn btn-secondary btn-block';
      }
    }
  }

}
