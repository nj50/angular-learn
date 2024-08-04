import { Component, OnInit } from '@angular/core';
import { Test1ApiService } from './test1.api.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrl: './test1.component.scss'
})
export class Test1Component implements OnInit{
  data: any
  constructor(private test1ApiService: Test1ApiService){
    console.log("hi")
  }
  ngOnInit(): void {
    this.test1ApiService.getProducts().subscribe((res)=>{
      this.data = res
    })
  }
}
