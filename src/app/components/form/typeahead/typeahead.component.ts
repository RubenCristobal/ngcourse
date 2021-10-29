import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss']
})
export class TypeaheadComponent implements OnInit {

  myArrayString: string[] = [];
  countriesLoaded = false;

  public model: any;

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.service.countriesStringArray$.subscribe(countries => {
      this.myArrayString = countries;
      console.log('ngOnInit: ' + countries);
      if(this.myArrayString.length > 0){
        this.countriesLoaded = true;
      }
    }
    );
    this.service.getCountries();
    
  }


  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.myArrayString.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )
}
