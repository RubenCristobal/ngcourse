import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ApodComponent } from './components/apod/apod/apod.component';
import { BeersComponent } from './components/beers/beers/beers.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { FormComponent } from './components/form/form/form.component';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { YourGuard } from './guards/your.guard';

const routes: Routes = [
    { path: 'calculator', component: CalculatorComponent },
    { path: 'heroes', component: HeroesComponent },
    { path: 'apod', component: ApodComponent },
    { path: 'beers', component: BeersComponent },
    { path: 'forms', component: FormComponent, canActivate: [YourGuard], },
    { path: '', redirectTo: '/forms', pathMatch: 'full' },
    { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
    },
    { path: '**', component: PageNotFoundComponent },



]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }