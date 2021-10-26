import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

enum States {
  Init,
  FirstFigure,
  SecondFigure,
  Result
}

@Injectable()
export class CalculatorService {

  private display = '';
  display$ = new BehaviorSubject<string>(this.display);

  private currentState = States.Init;
  private firstFigure = 0;
  private secondFigure = 0;
  private result = 0;
  private operator = '';

  constructor() { 
  }

  handleNumber(value: number) {
    switch (this.currentState) {
      case States.Init:
        this.firstFigure = value;
        this.display = value.toString();
        this.display$.next(this.display);
        this.currentState = States.FirstFigure;
        break;
      case States.FirstFigure:
        this.firstFigure = this.firstFigure * 10 + value;
        this.display += value.toString();
        this.display$.next(this.display);
        break;
      case States.SecondFigure:
        this.secondFigure = this.secondFigure * 10 + value;
        this.display += value.toString();
        this.display$.next(this.display);
        break;
      case States.Result:
        this.firstFigure = value;
        this.secondFigure = 0;
        this.result = 0;
        this.operator = '';
        this.display = value.toString();
        this.display$.next(this.display);
        this.currentState = States.FirstFigure;
        break;

      default:
        break;
    }
  }

  private getResult(): number {
    switch (this.operator) {
      case '+':
        return this.result = this.firstFigure + this.secondFigure;
      case '-':
        return this.result = this.firstFigure - this.secondFigure;
      case '*':
        return this.result = this.firstFigure * this.secondFigure;
      case '/':
        return this.result = this.firstFigure / this.secondFigure;
      default:
        return this.result;
    }
  }

  handleSymbol(value: string) {
    switch (this.currentState) {
      case States.Init:

        break;
      case States.FirstFigure:
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.currentState = States.SecondFigure;
          this.display += value;
          this.display$.next(this.display);

        }
        break;
      case States.SecondFigure:
        if (value === '=') {
          this.result = this.getResult();
          this.currentState = States.Result;
          this.display += value + this.result.toString();
          this.display$.next(this.display);

        }
        break;
      case States.Result:
        if (value === '+' || value === '-' || value === '*' || value === '/') {
          this.operator = value;
          this.firstFigure = this.result;
          this.secondFigure = 0;
          this.result = 0;
          this.currentState = States.SecondFigure;
          this.display = this.firstFigure.toString() + value;
          this.display$.next(this.display);

        }
        break;

      default:
        break;
    }

  }

}
