import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { DisplayComponent } from './components/calculator/display/display.component';
import { KeyboardComponent } from './components/calculator/keyboard/keyboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroFormComponent } from './components/heroes/hero-form/hero-form.component';
import { HeroListComponent } from './components/heroes/hero-list/hero-list.component';
import { CalculatorService } from './services/calculator.service';
import { HeroesService } from './services/heroes.service';
import { ApodComponent } from './components/apod/apod/apod.component';
import { HttpClientModule } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ApodService } from './services/apod.service';
import { DateApodComponent } from './components/apod/date-apod/date-apod.component';
import { ShowApodComponent } from './components/apod/show-apod/show-apod.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { AbvPipe } from './pipes/abv.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TemplateFormComponent } from './components/form/template-form/template-form.component';
import { ReactiveFormComponent } from './components/form/reactive-form/reactive-form.component';
import { FormComponent } from './components/form/form/form.component';
import { TypeaheadComponent } from './components/form/typeahead/typeahead.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TrivialComponent } from './components/trivial/trivial/trivial.component';
import { CardComponent } from './components/trivial/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    HeroesComponent,
    HeroFormComponent,
    HeroListComponent,
    ApodComponent,
    DateApodComponent,
    ShowApodComponent,
    BeersComponent,
    AbvPipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    FormComponent,
    TypeaheadComponent,
    PageNotFoundComponent,
    TrivialComponent,
    CardComponent
  ],
  
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    YouTubePlayerModule,
    NgxSliderModule,
    AppRoutingModule
  ],
  providers: [CalculatorService, HeroesService, ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
