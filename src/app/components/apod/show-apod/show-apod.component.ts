import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApodService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit, OnChanges {

  @Input() apodDate!: string;
  apod: any = {};
  apiLoaded = false;

  constructor(private service: ApodService) { }

  ngOnInit(): void {
    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.service.apod$.subscribe(
      (data) => {
        this.apod = this.service.getApod();
      }
    );
    this.service.getApodContent();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    changes.apodDate.currentValue && changes.apodDate.currentValue !== changes.apodDate.previousValue
      ? this.service.getApodContent(changes.apodDate.currentValue) : null;
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
