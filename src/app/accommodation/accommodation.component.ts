import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css'],
})
export class AccommodationComponent implements OnInit {

  public constructor(private titleService: Title){
    this.titleService.setTitle("Phòng nghỉ dưỡng"); 
  } 

  ngOnInit(): void {
  }
  
}
