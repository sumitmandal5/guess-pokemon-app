import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokemonGuessComponent } from './components/pokemon-guess/pokemon-guess.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guess', component: PokemonGuessComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
