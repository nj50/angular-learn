import { Component, OnInit } from '@angular/core';
import { Test3ApiService } from './test3.api.service';
import { CommonModule } from '@angular/common';
import { box1Component } from './boxcontainer/app-box-1.component';
import { box2Component } from './boxcontainer/app-box-2.component';
import { box3Component } from './boxcontainer/app-box-3.component';
import { box4Component } from './boxcontainer/app-box-4.component.';
import { box5Component } from './boxcontainer/app-box-5.component';
import { box6Component } from './boxcontainer/app-box-6.component';
import { box7Component } from './boxcontainer/app-box-7.component';

@Component({
  selector: 'app-test3',
  standalone: true,
  
  imports: [CommonModule,
    box1Component,
    box2Component,
    box3Component,
    box4Component,
    box5Component,
    box6Component,
    box7Component,
  ],
  providers:[Test3ApiService],
  templateUrl: './test3.component.html',
  styleUrl: './test3.component.scss'
})
export class Test3Component implements OnInit{
  data: any
  constructor(private test3ApiService: Test3ApiService){
  }
  ngOnInit(): void {
    this.test3ApiService.getProducts().subscribe(res =>{
      this.data = res;
    })
  }
}
