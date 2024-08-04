import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box5',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="box"> five </div>'
})
export class box5Component implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
   
  }
}
