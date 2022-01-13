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
    path: 'chapters',
    loadChildren: () => import('./chapters/chapters.module').then( m => m.ChaptersPageModule)
  },
  {
    path: 'figures',
    loadChildren: () => import('./figures/figures.module').then( m => m.FiguresPageModule)
  },
  {
    path: 'resources',
    loadChildren: () => import('./resources/resources.module').then( m => m.ResourcesPageModule)
  },
  {
    path: 'calculator',
    loadChildren: () => import('./calculator/calculator.module').then( m => m.CalculatorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
