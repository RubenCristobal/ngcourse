import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit, OnDestroy {

  apod: any = {};
  currentDate!: NgbDateStruct;
  apiLoaded = false;

  constructor(private apodService: ApodService) {
    console.log('Apod Constructor');

   }

  ngOnDestroy(): void {
    console.log('Apod OnDestroy');
  }

  ngOnInit(): void {
    console.log('Apod OnInit');

    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.apodService.apod$.subscribe(
      (data) => {
        this.apod = this.apodService.getApod();
      }
    );
    this.apodService.getApodContent();
  }

  handleDate(dateString: string): void {
    this.apodService.getApodContent(dateString);
    
  }

}
