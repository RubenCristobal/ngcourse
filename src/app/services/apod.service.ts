import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApodService {

  API_KEY = 'DEMO_KEY';
  private apod: any = undefined;
  apod$ = new BehaviorSubject<string>(this.apod);

  constructor(private http: HttpClient) { }

  getApodContent(dateString?: string): void {
    let url = '';
    if (!dateString) {
      url = `https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`;
    }else {
      url = `https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}&date=${dateString}`;
    }
    if (this.apod === undefined || this.apod.date !== dateString) {
      this.http.get(url).subscribe(data => {
        this.apod = data;
        this.apod$.next(this.apod);
        console.log(data);
      }, error => {
        console.log(error);
      }
      );
    }

  }

  getApod() {
    return { ...this.apod };
  }
}
