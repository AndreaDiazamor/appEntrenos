import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutricionPage } from './nutricion.page';

const routes: Routes = [
  {
    path: '',
    component: NutricionPage
  },
  {
    path: 'nutricion-detail',
    loadChildren: () => import('./nutricion-detail/nutricion-detail.module').then( m => m.NutricionDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutricionPageRoutingModule {}
