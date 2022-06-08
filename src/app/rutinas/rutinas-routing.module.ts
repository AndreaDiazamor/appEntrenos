import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinasPage } from './rutinas.page';

const routes: Routes = [
  {
    path: '',
    component: RutinasPage
  },
  {
    path: 'rutina-detail',
    loadChildren: () => import('./rutina-detail/rutina-detail.module').then( m => m.RutinaDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinasPageRoutingModule {}
