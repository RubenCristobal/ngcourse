import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/model/beer';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  beers:Beer[] = [];

  constructor(private service: BeersService) { }

  ngOnInit(): void {
    if(!this.service.anyBeers()){
      this.service.getBeers();
    }
    this.service.beers$.subscribe(
      beers => {
        this.beers = beers;
      }
    )
  }

}
