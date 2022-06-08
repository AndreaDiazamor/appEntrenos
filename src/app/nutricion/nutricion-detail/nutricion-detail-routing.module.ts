import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NutricionDetailPage } from './nutricion-detail.page';

const routes: Routes = [
  {
    path: '',
    component: NutricionDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutricionDetailPageRoutingModule {}
