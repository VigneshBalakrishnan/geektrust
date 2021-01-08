import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FalconeComponent } from './falcone/falcone.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: FalconeComponent
  },
  {
    path: 'results',
    component: SearchResultsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
