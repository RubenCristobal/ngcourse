import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit, OnDestroy {

  dateString!: string;

  constructor() {
    console.log('Apod Constructor');

   }

  ngOnDestroy(): void {
    console.log('Apod OnDestroy');
  }

  ngOnInit(): void {
    console.log('Apod OnInit');
  }

  handleDate(dateString: string): void {
    this.dateString = dateString;
    
  }

}
