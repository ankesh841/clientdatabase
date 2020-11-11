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


// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // AngularFireModule,
    // AngularFireDatabaseModule,
    MatInputModule,
    CommonModule,
    MatButtonModule,


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
