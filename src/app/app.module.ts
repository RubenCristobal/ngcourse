import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { HeroListComponent } from './components/heroes/hero-list/hero-list.component';
import { CalculatorService } from './services/calculator.service';
import { HeroesService } from './services/heroes.service';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroListComponent,
    ApodComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalculatorService, HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
