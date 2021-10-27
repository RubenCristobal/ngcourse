import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  API_KEY = 'DEMO_KEY';

  constructor(private http: HttpClient) { }

  getApod(): Observable<any> {
    return this.http.get(`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`);
  }
}
