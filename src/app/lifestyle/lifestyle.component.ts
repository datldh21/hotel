import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-lifestyle',
  templateUrl: './lifestyle.component.html',
  styleUrls: ['./lifestyle.component.css']
})
export class LifestyleComponent implements OnInit {

  public constructor(private titleService: Title){
    this.titleService.setTitle("Phong cách"); 
  } 

  ngOnInit(): void {
  }

}
