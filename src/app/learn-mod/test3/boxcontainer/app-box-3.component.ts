import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box3',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="box"> three </div>'
})
export class box3Component implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
   
  }
}
