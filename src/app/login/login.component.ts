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
   }
  ngOnInit(): void {
  }
  goolgeLogin(){
    // console.log('google loginm clicnec')
  }
  hide = true;
  userEmail;
  userPassword;
 register(){
   this.loginErrorMessage="";
this.afAuth.createUserWithEmailAndPassword(this.userEmail, this.userPassword).then(user=>{
  //created user
}).catch(error=>{
  this.loginErrorMessage=error.code;
})
 }
 loginErrorMessage= "";
 loginMethod(){
this.loginErrorMessage =""
  this.afAuth.signInWithEmailAndPassword(this.userEmail, this.userPassword).then(user=>{
    //logged in
  }).catch(error=>{
    this.loginErrorMessage=error.code;
  })
 }
}
