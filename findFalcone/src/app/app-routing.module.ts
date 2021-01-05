import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FalconeComponent } from './falcone/falcone.component';

const routes: Routes = [
  {
    path: '',
    component: FalconeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
