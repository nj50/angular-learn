import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box4',
  standalone: true,
  imports: [CommonModule],
  template: '<div class="box"> four </div>'
})
export class box4Component implements OnInit{
  constructor(){
  }
  ngOnInit(): void {
   
  }
}
