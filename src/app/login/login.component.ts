import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:boolean;

  constructor() {
    console.log('i ma in constructor')


   }
  ngOnInit(): void {
  }
  googleLogin(){
    console.log('google loginm clicnec')
  }

}
