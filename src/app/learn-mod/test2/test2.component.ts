import { Component, OnInit } from '@angular/core';
import { Test2ApiService } from './test2.api.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.scss'
})
export class Test2Component implements OnInit {
  data: any
  constructor(private test2ApiService: Test2ApiService){
    console.log("hi")
  }
  ngOnInit(): void {
    this.test2ApiService.getUsers().subscribe((res)=>{
      this.data = res
    })
  }
}
