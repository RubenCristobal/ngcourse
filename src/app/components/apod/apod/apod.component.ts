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

  handleDate() {
    console.log('handleDate');
    console.log(this.currentDate);
    // get currentDate as string YYYY-MM-DD
    const dateString = this.currentDate.year + '-' + this.currentDate.month + '-' + this.currentDate.day;
    this.apodService.getApodContent(dateString);
    
  }

  // a method that returns youtube video ID from the url
  getYoutubeID(): string {
    const url = this.apod.url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return 'error';
    }
  }
}
