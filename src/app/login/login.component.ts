import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:boolean;

  constructor(private afAuth:AngularFireAuth) {
    console.log('i ma in constructor')


   }
  ngOnInit(): void {
  }
  goolgeLogin(){
    console.log('google loginm clicnec')
  }

  hide = true;
  userEmail;
  userPassword;

 register(){  
  this.afAuth.createUserWithEmailAndPassword(this.userEmail, this.userPassword).catch(function(error){
    console.log(error.code, error.message);
    console.log('logged in')

  })

 }
 loginMethod(){
  this.afAuth.signInWithEmailAndPassword(this.userEmail, this.userPassword).catch(function(error){
      console.log(error.code, error.message);
      console.log('logged In using log in method.')
  })

 }
 

}
