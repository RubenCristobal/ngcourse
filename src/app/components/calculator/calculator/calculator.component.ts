import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor(private service: CalculatorService) { 
    this.service.display$.subscribe(display => {
      console.log(display);
      this.display = display});
  }

  ngOnInit(): void {
  }


  handleClick(value: number | string) {
    if (typeof value === 'number') {
      this.service.handleNumber(value);
    } else if (typeof value === 'string') {
      this.service.handleSymbol(value);
    }

  }

}
