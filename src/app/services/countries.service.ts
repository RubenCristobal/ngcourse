import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private countries: any[] = [];
  private countriesStringArray: string[] = [];
  countriesStringArray$ = new BehaviorSubject<string[]>(this.countriesStringArray); 

  constructor(private http: HttpClient) { }

  getCountries() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe(
      (data: any) => {
        this.countries = data;
        let temp: string[] = [];
        this.countries.forEach((country: any) => {
          temp.push(country.name.official);
        });
        this.countriesStringArray = [...temp];
        this.countriesStringArray$.next(this.countriesStringArray);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
