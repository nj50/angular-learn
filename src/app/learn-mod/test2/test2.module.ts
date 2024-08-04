import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test2Component } from './test2.component';
import { RouterModule } from '@angular/router';
import { Test2ApiService } from './test2.api.service';



@NgModule({
  declarations: [
    Test2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Test2Component
      }
    ])
  ],
  providers: [Test2ApiService]
})
export class Test2Module { }
