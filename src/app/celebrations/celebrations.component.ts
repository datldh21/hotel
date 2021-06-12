import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-celebrations',
  templateUrl: './celebrations.component.html',
  styleUrls: ['./celebrations.component.css']
})
export class CelebrationsComponent implements OnInit {

  public constructor(private titleService: Title){
    this.titleService.setTitle("Tiệc kỷ niệm"); 
  } 

  ngOnInit(): void {
  }

}
