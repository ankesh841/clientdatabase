import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

// import {MatInput, MatInputModule} from '@angular/material/input';

import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 


import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule} from '@angular/material/datepicker';

  import {MatNativeDateModule} from'@angular/material/core';

// MatNativeDateModule 

import {MatIconModule} from '@angular/material/icon';

import {CommonModule} from'@angular/common';

import * as firebase from 'firebase';


// firebase.initializeApp(environment.firebase);
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';


firebase.default.initializeApp(environment.firebase)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    // AngularFireModule,
    // AngularFireDatabaseModule,
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
    BrowserAnimationsModule
  ],
  exports:[MatFormFieldModule, MatInputModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
