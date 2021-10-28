import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  model = new Hero('', '');

  regexName = /^[a-zA-Z ]+$/;

  submitted = false;

  onSubmit() { 
    console.log('Submitted');
    console.log(this.model);
    this.submitted = true; 
  }

  newHero() {
    this.model = new Hero('', '');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
