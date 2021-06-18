import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  public constructor(private titleService: Title){
    this.titleService.setTitle("Lấy lại mật khẩu"); 
  } 

  ngOnInit(): void {
  }

}
