import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box6',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="box"> six </div>'
})
export class box6Component implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
   
  }
}
