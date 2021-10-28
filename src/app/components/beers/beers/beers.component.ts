import { Options } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers: Beer[] = [];
  showBeers: Beer[] = [];
  filterText = '';
  
  minValue: number = 4;
  maxValue: number = 5;
  options: Options = {
    floor: 0,
    ceil: 60,
    step: 0.1,
  };

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    if (!this.service.anyBeers()) {
      this.service.getBeers();
    }
    this.service.beers$.subscribe(
      beers => {
        this.beers = beers;
        this.filterBeers();
      }
    )
  }

  filterBeers() {
    this.showBeers = this.beers.
      filter(beer => beer.abv >= this.minValue && beer.abv <= this.maxValue).
      filter(beer => beer.name.toLowerCase().startsWith(this.filterText.toLowerCase())).
      sort((a, b) => a.abv - b.abv);
  }

  handleChange(event: any) {
    console.log(event);
    this.filterBeers();

  }

  handleChangeInput() {
    console.log(this.filterText);
    this.filterBeers();
  }

}
