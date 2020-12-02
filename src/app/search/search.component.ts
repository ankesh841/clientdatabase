import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import * as firebase from 'firebase';
import {AngularFireAuth}from '@angular/fire/auth';
import { BackendService } from '../backend.service';



// import { AngularFireDatabase } from 'angularfire2/database';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, NgForm, FormControl } from '@angular/forms';


import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import * as $ from 'jquery'
import { FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as moment from 'moment';
import { timestamp } from 'rxjs/operators';
import _, { map } from 'underscore';

import swal from "sweetalert2";
import { browser } from 'protractor';

// import { CONNREFUSED } from 'dns';
// import { copyFileSync } from 'fs';



import { saveAs } from 'file-saver';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  firstName_search = "";
  lastName_search = "";
  officeFile_search = "";
  email_search ="";

  searchData=[];
  showResult = false;  closeResult = '';





  applicationType;
  fileStatus:string;
  memo = '';
  embassyFileNo:string;
  officeFileNo:string;
  EmbassyFileNo1:string;
  firstName:string;
  caseProcessName:string;
  middleName:string;
  lastName:string;
  clientStatus:string;
  otherName:string;
  whichOffice:string;
  whichGender:string;
  whichNational:string;
  whichState:string;
  whichCountry:string;

  addressOne:string;
  // addressTwo:string;
  city:string;
  postalCode:string;
  // mailing
  addressOneMailing:string;
  // addressTwoMailing:string;
  cityMailing:string;
  postalCodeMailing:string;
  countryMailing:string;
  stateMailing:string
//
  occupation:string;
  education = '';

  maritalStatus:string;
  spouseTitle:string;
  spouseFirstName:string;
  spouseLastName:string;
  spouseMiddleName:string;
  spouseEducation = '';
  sponsorTitle:string;

  spousedateOfBirth:string;

  sponsorFirstName:string;
  sponsorLastName:string;
  sponsorAddress:string;
  sponsorPhone:string;

  sponsorSpouseFirstName:string;
  sponsorSpouseLastName:string;
  sponsorSpouseAddress:string;
  sponsorSpousePhone:string;

  clientDOB:string;
  phoneNumberClient


  notes;
  subject;

  generalClientInfoTitle:string;


/////adding notes




/////







  currentDate;
  minDate: Date;
  maxDate: Date;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  title = 'clientDatabase';
  applicationTypeArray = ['Visitor Visa', 'Visitor Extension','Super Visa', 'Spousal Sponsorship', 'ATIP', 'Study Visa', 'Work Visa', 'Express Entry', 'Canadian Experience', 'BC PNP', 'Self Employed', 'Care Giver', 'Investor Class', 'LMIA', 'Appeal', 'H&C', 'Judicial Class', 'Refugee Program', 'Family Sponsorship', 'Citizenship', 'Misc', 'PRCard Renewal'];
  fileStatusArray = ['Active', 'Inactive'];
  selectTitle = ['Mr.', 'Ms.', 'Mrs.'];
  officeArray  = ['Office A', 'office b' , 'office c'];
  genderArray = ['Male', 'Female', 'Other'];

  nationalArray = ['Afghan', 'Albanian', 'Algerian', 'American', 'Andorran', 'Angolan', 'Antiguans', 'Argentinean', 'Armenian', 'Australian', 'Austrian', 'Azerbaijani', 'Bahamian', 'Bahraini', 'Bangladeshi', 'Barbadian', 'Barbudans', 'Batswana', 'Belarusian', 'Belgian', 'Belizean', 'Beninese', 'Bhutanese', 'Bolivian', 'Bosnian', 'Brazilian', 'British', 'Bruneian', 'Bulgarian', 'Burkinabe', 'Burmese', 'Burundian', 'Cambodian', 'Cameroonian', 'Canadian', 'Cape Verdean', 'Central African', 'Chadian', 'Chilean', 'Chinese', 'Colombian', 'Comoran', 'Congolese', 'Costa Rican', 'Croatian', 'Cuban', 'Cypriot', 'Czech', 'Danish', 'Djibouti', 'Dominican', 'Dutch', 'East Timorese', 'Ecuadorean', 'Egyptian', 'Emirian', 'Equatorial Guinean', 'Eritrean', 'Estonian', 'Ethiopian', 'Fijian', 'Filipino', 'Finnish', 'French', 'Gabonese', 'Gambian', 'Georgian', 'German', 'Ghanaian', 'Greek', 'Grenadian', 'Guatemalan', 'Guinea-Bissauan', 'Guinean', 'Guyanese', 'Haitian', 'Herzegovinian', 'Honduran', 'Hungarian', 'I-Kiribati', 'Icelander', 'Indian', 'Indonesian', 'Iranian', 'Iraqi', 'Irish', 'Israeli', 'Italian', 'Ivorian', 'Jamaican', 'Japanese', 'Jordanian', 'Kazakhstani', 'Kenyan', 'Kittian and Nevisian', 'Kuwaiti', 'Kyrgyz', 'Laotian', 'Latvian', 'Lebanese', 'Liberian', 'Libyan', 'Liechtensteiner', 'Lithuanian', 'Luxembourger', 'Macedonian', 'Malagasy', 'Malawian', 'Malaysian', 'Maldivan', 'Malian', 'Maltese', 'Marshallese', 'Mauritanian', 'Mauritian', 'Mexican', 'Micronesian', 'Moldovan', 'Monacan', 'Mongolian', 'Moroccan', 'Mosotho', 'Motswana', 'Mozambican', 'Namibian', 'Nauruan', 'Nepalese', 'New Zealander', 'Nicaraguan', 'Nigerian', 'Nigerien', 'North Korean', 'Northern Irish', 'Norwegian', 'Omani', 'Pakistani', 'Palauan', 'Panamanian', 'Papua New Guinean', 'Paraguayan', 'Peruvian', 'Polish', 'Portuguese', 'Qatari', 'Romanian', 'Russian', 'Rwandan', 'Saint Lucian', 'Salvadoran', 'Samoan', 'San Marinese', 'Sao Tomean', 'Saudi', 'Scottish', 'Senegalese', 'Serbian', 'Seychellois', 'Sierra Leonean', 'Singaporean', 'Slovakian', 'Slovenian', 'Solomon Islander', 'Somali', 'South African', 'South Korean', 'Spanish', 'Sri Lankan', 'Sudanese', 'Surinamer', 'Swazi', 'Swedish', 'Swiss', 'Syrian', 'Taiwanese', 'Tajik', 'Tanzanian', 'Thai', 'Togolese', 'Tongan', 'Trinidadian/Tobagonian', 'Tunisian', 'Turkish', 'Tuvaluan', 'Ugandan', 'Ukrainian', 'Uruguayan', 'Uzbekistani', 'Venezuelan', 'Vietnamese', 'Welsh', 'Yemenite', 'Zambian', 'Zimbabwean'];

  stateArray=['Alberta', 'British Columbia', 'Manitoba', 'New Brunswick', 'Newfoundland and Labrador', 'Northwest Territories', 'Nova Scotia', 'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan', 'Yukon Territory'];

  countryArray = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

  occupationArray=['Student', 'Employed', 'Un-Employed', 'Other'];
  educationArray=['Diploma', 'Post-Graduate', 'Under-Graduate', 'High-School'];
  maritalArray=['Single', 'Married', 'Common-Law', 'Divorced'];



  // ///////////////////////////////////////////////



  search_main = "";
  afDatabase: any;
  constructor(private afAuth:AngularFireAuth,
     public formBuilder:FormBuilder, private backend:BackendService, private changeDetect:ChangeDetectorRef, private _snackBar: MatSnackBar,  public dialog: MatDialog, private modalService: NgbModal) {
    this.afAuth.authState.subscribe(res =>{
        if(res){
          //still logged
          console.log(res.email)
        }
    })
   }

   open(content) {

    this.modalService.open(content, {backdrop:'static', size:'xl', animation:true})

  }
  registerForm: FormGroup;
  submitted = false;

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      secondSelect: ['', Validators.required],
      // inp: ['', Validators.required],
      first:['', Validators.required],

      inputOffice:['',Validators.required],
      // inputOffice1:['', Validators.required],
      titleGeneralClient:['',Validators.required],
      name2:['', Validators.required],
      name2q:['', Validators.required],
      clientsta:['', Validators.required],
      name2s:['', Validators.required],
      gende:['', Validators.required],
      clientDOB1:['', Validators.required],
      phonenumberclientt:['', Validators.required],
      clientstassa:['', Validators.required],
      addsre:['', Validators.required],
      cihtyl:['', Validators.required],
      cflientstassa:['', Validators.required],
      cfflientstassa:['', Validators.required],
      addsrsdae:['', Validators.required],
      cightyl:['', Validators.required],
      cfliefntstassa:['', Validators.required],
      memoInpfutdf:['', Validators.required],
      cfflientgstassa:['', Validators.required],
      fcfflientgstassa:['', Validators.required],
      cfflientgstassfa:['', Validators.required],
      cfflientgdsfstassdfa:['', Validators.required],
      nasdame2:['', Validators.required],
      namdfsesadf2:['', Validators.required],
      spousedateofbirthd_:['', Validators.required],

      notesForm:['',Validators.required],

      //optionals
      memoInput:['', Validators.nullValidator],
      name22:['', Validators.nullValidator],
      namse2sas:['', Validators.nullValidator],
      nasdfsame2:['', Validators.nullValidator],
      nasddsame2:['', Validators.nullValidator],
      adddasre:['', Validators.nullValidator],
      sdlfkjsa:['', Validators.nullValidator],
      nasdfssdfame2:['', Validators.nullValidator],
      nasddsdfame2:['', Validators.nullValidator],
      adddfasadsre:['', Validators.nullValidator],
      sdlfkjsasaf:['', Validators.nullValidator],
      // memofInputdf:['', Validators.nullValidator],
      namdfse2:['', Validators.nullValidator],
      dj:['', Validators.nullValidator],
      inp:['', Validators.nullValidator],
      inputOffice1:['', Validators.nullValidator],
      memoInputdf:['', Validators.nullValidator],
      cfflientgstassfa_:['', Validators.required]

    });

  }

//fill all data

valarray:boolean
clientRecordProgress:boolean;


  openClientInfo(objectid, content){
    this.clientRecordProgress = true;
    this.searchData.forEach(insideArray=>{
      for(var i =0;i<insideArray.length; i++){
        if(insideArray[i].objectID===objectid){
          // console.log(insideArray[i])
          this.firstName=insideArray[i].firstName;
          this.addressOne=insideArray[i].addressOne;
          ////////////////////////////////////
          this.applicationType=insideArray[i].applicationType;
          this.fileStatus=insideArray[i].fileStatus;
          this.memo=insideArray[i].memo;
          this.embassyFileNo=insideArray[i].embassyFileNo;
          this.officeFileNo=insideArray[i].officeFileNo;
          this.EmbassyFileNo1=insideArray[i].EmbassyFileNo1;
          this.firstName=insideArray[i].firstName;
          this.caseProcessName=insideArray[i].caseProcessName;
          this.middleName=insideArray[i].middleName;
          this.lastName=insideArray[i].lastName;
          this.clientStatus=insideArray[i].clientStatus;
          this.otherName=insideArray[i].otherName
          this.whichOffice=insideArray[i].whichOffice;
          this.whichGender=insideArray[i].whichGender;
          this.whichNational=insideArray[i].whichNational;
          this.whichState=insideArray[i].whichState;
          this.whichCountry=insideArray[i].whichCountry;
          this.addressOne=insideArray[i].addressOne;
          // addressTwo=(this.addressTwo)?this.addressTwo="NA";
          this.city=insideArray[i].city;
          this.postalCode=insideArray[i].postalCode;
          // mailing
          this.addressOneMailing=insideArray[i].addressOneMailing;
          // addressTwoMailing=this.addressTwoMailing;
          this.cityMailing=insideArray[i].cityMailing;
          this.postalCodeMailing=insideArray[i].postalCodeMailing;
          this.countryMailing=insideArray[i].countryMailing;
          this.stateMailing=insideArray[i].stateMailing;
        //
        this.occupation=insideArray[i].occupation;
        this.education=insideArray[i].education;
        this.maritalStatus=insideArray[i].maritalStatus;
        this.spouseTitle=insideArray[i].spouseTitle;
        this.spouseFirstName=insideArray[i].spouseFirstName;
        this.spouseLastName=insideArray[i].spouseLastName;
        this.spouseMiddleName=insideArray[i].spouseMiddleName;
        this.spouseEducation=insideArray[i].spouseEducation;

        // this.sponsorTitle=(this.sponsorTitlee="NA";
        this.sponsorFirstName=insideArray[i].sponsorFirstName;
        this.sponsorLastName=insideArray[i].sponsorLastName;
        this.sponsorAddress=insideArray[i].sponsorAddress;
        this.sponsorPhone=insideArray[i].sponsorPhone;

        this.sponsorSpouseFirstName=insideArray[i].sponsorSpouseFirstName;
        this.sponsorSpouseLastName=insideArray[i].sponsorSpouseLastName;
        this.sponsorSpouseAddress=insideArray[i].sponsorSpouseAddress;
        this.sponsorSpousePhone=insideArray[i].sponsorSpousePhone;

        }
      }
    })
   this.registerForm.disable();

   setTimeout(() => {
      this.clientRecordProgress = false;
   }, 1000);
  }


  currentOjbectId= "";
  showingOptionProgress:boolean;

  showingOptions(objectid, content){
    this.showingOptionProgress = true;

    this.uploadingFileNameDisplay=""
    this.currentOjbectId=objectid;
    this.open(content);

    setTimeout(() => {
        this.showingOptionProgress=false;
    }, 1000);

  }

  displayClientRecords(viewClientDialog){
      this.open(viewClientDialog)
      this.openClientInfo(this.currentOjbectId,viewClientDialog);
  }

  progressBarDisplayNotes:boolean;

  addNotesDialog(notesDialog){
  this.progressBarDisplayNotes = false;
  this.currentClientNotesArray=  [];
  this.resetNotesForm();
  this.open(notesDialog);

  this.displayingNotesRecord().then(val=>{
    this.currentClientNotesArray  = val;
  })

  setTimeout(() => {
    this.progressBarDisplayNotes = true;
  }, 1000);

}



storedFilesUrls;

storedFileProgress:boolean;


openDownloadDialogBox(downloadDialogBox){
  this.storedFileProgress = true;

  this.open(downloadDialogBox);
  this.storedFilesUrls = this.showAllFiles();

  setTimeout(() => {
      this.storedFileProgress=false;
  }, 2000);
  console.log(this.storedFilesUrls)

}


downloadingFilesOnClick(downloadLink){
    console.log(downloadLink)
    // browser.downloads.
    window.open(downloadLink , '_blank');
    // saveAs.saveAs(downloadLink, "image.jpg");

    // window.open(downloadLink)
    saveAs.saveAs(downloadLink)

    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = function(event) {
    //   var blob = xhr.response;
    // };
    // xhr.open('GET', downloadLink);
    // xhr.send();


}


showAllFiles(){

  let temp = []
  let tempObj ={}
  var todownload  = firebase.default.storage().ref('data/'+this.currentOjbectId+'/');


    todownload.listAll().then(function(result){



      result.items.forEach(function(imageRef) {

        console.log(imageRef.name)
        imageRef.getDownloadURL().then(function(url){

          tempObj ={
            fileName:imageRef.name,
            url:url
          }

          temp.push(tempObj)

        }).catch(function(error){
          console.log(error)
        })


      });

    })

    return temp;
}



ref  = firebase.default.database().ref();
currentClientNotesArray;

  async displayingNotesRecord(){
  var objectId = this.currentOjbectId;
  var notesArray=[]

 this.ref.on('child_added', function(snap){

  if(objectId === snap.key){

   snap.forEach(element => {
    element.forEach(dl=>{
      notesArray.push(dl.val());
    })
});

  }
});

// notesArray.sort(function(x, y){
//   return y.timestamp - x.timestamp;
// })

// var sortQ = _.sortBy( notesArray, 'timestamp' );
// console.log(sortQ)
// _.sortBy( jsonData, function( item ) { return -item.average; } )

// var a = _.sortBy( notesArray, function( val ){ return -val.timestamp; } );

// return _.sortBy( notesArray, function( val ){ return -val.timestamp; } );
return notesArray.sort((a, b) => b.timestamp - a.timestamp);

}

allNewNotesArray = [];
displayError;

addingNotes(){
  this.displayError=""
if(this.subject && this.notes){
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
this.addNotesToFirebase(date);
this.currentClientNotesArray=[];
this.currentClientNotesArray = this.displayingNotesRecord();
this.changeDetect.detectChanges();

}
else{
  this.displayError="Input Error";

}
}


addNotesToFirebase(date){
  var objectId = this.currentOjbectId;
  var notes = this.notes;
  var subject = this.subject;

  var timeStamp = Date.now();
  // console.log(timeStamp)
  var ref = firebase.default.database().ref();

  ref.on('child_added', function(snap){
      if(objectId === snap.key){

        ref.child(objectId).child('notes').push({
          subject:subject,
          notes:notes,
          date:date,
          timestamp:timeStamp
        })

      }
    });

    this.resetNotesForm();



}

resetNotesForm(){
  this.notes="";
  this.subject="";
  this.uploadingFileNameDisplay=""
}


storageRef;
uploadingFileNameDisplay= ""

upload(event) {

    const file = event.target.files[0];
    var uploadingFileName = "";
    this.uploadingFileNameDisplay = "";
    (file.name)?uploadingFileName=file.name:uploadingFileName=Math.floor(100000 + Math.random() * 900000)+"";
  this.uploadingFileNameDisplay=uploadingFileName;

    console.log(uploadingFileName)
    // this.open(uploadImageAlertDialog);

    swal.fire({
      title: 'Do you want to upload ? '+"'"+uploadingFileName+"'",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then((result) => {
      if (result.isConfirmed) {
        this.uploadFile(uploadingFileName, file);

        swal.fire(
          'Uploaded!',
          'Your file has been Uploaded to the Database.',
          'success'
        )
      }
    })







}





uploadFile(uploadingFileName, file){
  this.storageRef = firebase.default.storage().ref();
  this.storageRef.child('data/'+this.currentOjbectId).child(uploadingFileName).put(file).then(function(snapshot) {
    console.log(snapshot)
    console.log('Uploaded a file!');

      });

}



openSnackBar(message: string, action: string) {
  this._snackBar.open(message, action, {
    duration: 2000,
  });
}
  openModal(){
    $("#notificationModal").modal('show')
  }




searchSubmit(){
  this.showResult=true;
  this.searchData=[]
  let index = '';

  let search = '';

  if(this.firstName_search.length>3||this.lastName_search.length>3||this.officeFile_search.length>4){
      index='attributeSearch'
      search=this.firstName_search+' '+this.lastName_search+' '+this.officeFile_search
  }
  else{
    index = 'clientDb'
    search = this.search_main;
  }

  this.backend.search(search, index).subscribe(res=>{
    this.searchData.push(res);
  })
  // console.log(this.searchData)

}


}
