import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit, OnDestroy {

  apod: any = {};

  constructor(private apodService: ApodService) {
    console.log('Apod Constructor');

   }
  ngOnDestroy(): void {
    console.log('Apod OnDestroy');
  }

  ngOnInit(): void {
    console.log('Apod OnInit');
    this.apodService.apod$.subscribe(
      (data) => {
        this.apod = this.apodService.getApod();
      }
    );
    this.apodService.getApodContent();
  }
}
