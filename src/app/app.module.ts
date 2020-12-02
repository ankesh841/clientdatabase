import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
// import {MatInput, MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import {MatDialogModule} from '@angular/material/dialog';


import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';

  import {MatNativeDateModule} from'@angular/material/core';
  import {MatTableModule} from '@angular/material/table';


// MatNativeDateModule

import {MatIconModule} from '@angular/material/icon';

import {CommonModule} from'@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';

import * as firebase from 'firebase';


// import { AngularFireStorage } from 'angularfire2/storage';


import {MatExpansionModule} from '@angular/material/expansion';

// firebase.initializeApp(environment.firebase);
import { AngularFireModule } from '@angular/fire';
// import {AngularFireStorage} from '@angular/fire/storage';

import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddClientComponent } from './add-client/add-client.component';

import {MatListModule} from '@angular/material/list';

import {MatSnackBarModule} from '@angular/material/snack-bar';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatProgressBarModule} from '@angular/material/progress-bar';






firebase.default.initializeApp(environment.firebase)
const routes: Routes = [
  {path:'', component:LandingPageComponent},
  { path: 'landingPage', component: LandingPageComponent },
  { path: 'addClient', component: AddClientComponent },
  {path: 'login', component:LoginComponent},
  {path: 'search', component:SearchComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    AddClientComponent,
    SearchComponent
  ],
  imports: [
    MatDialogModule,
    MatTableModule,
    MatProgressBarModule,
    MatListModule,
    // AngularFireStorage,
    MatSidenavModule,
    // AngularFireModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatExpansionModule,
    // AngularFireDatabaseModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    CommonModule,
    MatButtonModule,
AngularFireModule.initializeApp(environment.firebase),
MatCardModule,

       BrowserModule,
    AppRoutingModule,MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatIconModule,
MatDatepickerModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports:[MatFormFieldModule, MatInputModule , RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
