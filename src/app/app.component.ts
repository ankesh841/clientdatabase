import { ChangeDetectorRef, Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Route, Router } from '@angular/router';



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

  constructor(private breakpointObserver: BreakpointObserver,
    private route:Router,
     private afAuth:AngularFireAuth, private changeDetector:ChangeDetectorRef){
    this.afAuth.authState.subscribe((res) => {
      if (res) {
        // console.log(res.email);
        this.route.navigate(['/landingPage']);
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
      this.login=false;
     this.changeDetector.detectChanges();
  }
}
