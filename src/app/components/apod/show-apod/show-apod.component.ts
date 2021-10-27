import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-apod',
  templateUrl: './show-apod.component.html',
  styleUrls: ['./show-apod.component.scss']
})
export class ShowApodComponent implements OnInit {

  @Input() apod: any;

  constructor() { }

  ngOnInit(): void {
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
