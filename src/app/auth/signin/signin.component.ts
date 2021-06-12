import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public constructor(private titleService: Title){
    this.titleService.setTitle("Đăng nhập"); 
  } 

  ngOnInit(): void {
  }

}
