import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box2',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="box"> two </div>'
})
export class box2Component implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
   
  }
}
