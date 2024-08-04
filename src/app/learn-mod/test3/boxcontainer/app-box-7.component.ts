import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box7',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="box"> seven </div>'
})
export class box7Component implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
   
  }
}
