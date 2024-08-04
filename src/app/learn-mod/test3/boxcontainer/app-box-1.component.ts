import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box1',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="box"> one </div>'
})
export class box1Component implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
   
  }
}
