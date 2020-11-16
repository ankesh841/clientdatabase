import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import {AngularFireAuth}from '@angular/fire/auth';
import { BackendService } from '../backend.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // firstName_search = "";
  // lastName_search = "";
  // officeFile_search = "";
  // email_search ="";

  searchData=[];
  showResult = false;  closeResult = '';


  search_main = "";
  constructor(private afAuth:AngularFireAuth, private backend:BackendService, public dialog: MatDialog, private modalService: NgbModal) {
    this.afAuth.authState.subscribe(res =>{
        if(res){
          //still logged
          console.log(res.email)
        }
    })
   }

   open(content) {  
    this.modalService.open(content, {backdrop: 'static'} ).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }

  ngOnInit(): void {
  }

  openClientInfo(objectid){
    console.log(objectid, 'obje')
  }


  openDialog() {

  }
 
  openModal(){
    $("#notificationModal").modal('show')
  }
searchSubmit(){
  this.showResult=true;
  this.searchData=[]
  this.backend.search(this.search_main).subscribe(res=>{
    this.searchData.push(res);
  })  
  console.log(this.searchData)
}


}
