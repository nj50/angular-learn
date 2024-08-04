import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1.component';
import { RouterModule } from '@angular/router';
import { Test1ApiService } from './test1.api.service';



@NgModule({
  declarations: [
    Test1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: Test1Component
      }
    ])
  ],
  providers:[Test1ApiService]
})
export class Test1Module { }
