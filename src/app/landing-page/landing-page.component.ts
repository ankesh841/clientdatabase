import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  userEmail;

  constructor(private afAuth:AngularFireAuth) {    
    this.afAuth.authState.subscribe(res =>{
      if(res){
        this.userEmail = res.email;
      }
         });
  }

  storageRef;
  uploadingFileNameDisplay= ""

  upload(event) {   
    
      const file = event.target.files[0];
      var uploadingFileName = "";
      (file.name)?uploadingFileName=file.name:uploadingFileName=Math.floor(100000 + Math.random() * 900000)+"";
    this.uploadingFileNameDisplay=uploadingFileName;

      console.log(uploadingFileName)
// this.storageRef = firebase.default.storage().ref();
// this.storageRef.child('users/'+this.userEmail).child(uploadingFileName).put(file).then(function(snapshot) {

//   console.log(snapshot)
//   console.log('Uploaded a file!');

//     });
  }


  showAllFiles(){

    var todownload  = firebase.default.storage().ref('users/'+this.userEmail+'/');
      todownload.listAll().then(function(result){
        result.items.forEach(function(imageRef) {
          // And finally display them
          // displayImage(imageRef);
          imageRef.getDownloadURL().then(function(url){
            console.log(url, 'url')
          }).catch(function(error){
            console.log(error)
          })
          
          
        });

      });
    

  }
  ngOnInit(): void {




  }

}
