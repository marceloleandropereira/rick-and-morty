import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', 
    children: [
      {
        path: 'characters',
        loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule)
      }, {
        path: 'locations',
        loadChildren: () => import('./features/characters/characters.module').then(m => m.CharactersModule)
      }, {
        path: '**',
        redirectTo: 'characters',
        pathMatch: 'full'
      }
    ]
  }, {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
