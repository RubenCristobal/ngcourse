import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  API_KEY = 'DEMO_KEY';
  private apod: any = undefined;
  apod$ = new BehaviorSubject<string>(this.apod);

  constructor(private http: HttpClient) { }

  getApodContent(): void {
    if (this.apod === undefined) {
      this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`).subscribe(data => {
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
