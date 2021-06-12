import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public constructor(private titleService: Title){
    this.titleService.setTitle("Đăng ký"); 
  } 

  ngOnInit(): void {
  }

}
