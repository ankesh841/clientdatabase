import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  login:boolean;
  

  constructor(private breakpointObserver: BreakpointObserver, private afAuth:AngularFireAuth){

    this.afAuth.authState.subscribe((res) => {
      if (res) {
        // console.log(res.email);
        this.login = true;
      }
      else {
        // console.log('Not logged In');
        this.login = false;

        }
    })
  }

  logOut(){
    this.afAuth.signOut();
  }

}
