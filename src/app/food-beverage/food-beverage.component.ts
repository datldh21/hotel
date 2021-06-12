import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-food-beverage',
  templateUrl: './food-beverage.component.html',
  styleUrls: ['./food-beverage.component.css']
})
export class FoodBeverageComponent implements OnInit {

  public constructor(private titleService: Title){
    this.titleService.setTitle("Ẩm thực"); 
  } 

  ngOnInit(): void {
  }

}
