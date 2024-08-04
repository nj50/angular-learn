import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test-1',
    loadChildren: () => import('./learn-mod/test1/test1.module').then(module => module.Test1Module)
  },
  {
    path: 'test-2',
    loadChildren: () => import('./learn-mod/test2/test2.module').then(module => module.Test2Module)
  },
  {
    path: 'test-3',
    loadComponent: () => import('./learn-mod/test3/test3.component').then(module => module.Test3Component)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
