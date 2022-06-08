import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'rutinas',
    children: [
      {
        path: '',
        loadChildren: () => import('./rutinas/rutinas.module').then( m => m.RutinasPageModule)
      },
      {
        path: ':rutinaId',
        loadChildren: () => import('./rutinas/rutina-detail/rutina-detail.module').then(m =>m.RutinaDetailPageModule)
      }
    ]
  },
  {
    path: 'nutricion',
    loadChildren: () => import('./nutricion/nutricion.module').then( m => m.NutricionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
