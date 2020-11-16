import { Component, defineInjectable, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import * as jquery from 'jquery';

import {AngularFireAuth} from '@angular/fire/auth';

import * as firebase from 'firebase';
import { SplitInterpolation } from '@angular/compiler';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {
 
  registerForm: FormGroup;
  submitted = false;
 
  ngOnInit(): void {
  
    this.registerForm = this.formBuilder.group({
      secondSelect: ['', Validators.required],
      // inp: ['', Validators.required],
      first:['', Validators.required],

      inputOffice:new FormControl(),
      // inputOffice1:['', Validators.required],

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
      // memoInputdf:['', Validators.required],
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
      memofInputdf:['', Validators.nullValidator],
      namdfse2:['', Validators.nullValidator],
      dj:['', Validators.nullValidator],
      inp:['', Validators.nullValidator],
      inputOffice1:['', Validators.nullValidator],
      memoInputdf:['', Validators.nullValidator]
    });

//   this.registerForm = new FormGroup({
//     memoInput: new FormControl(),
//     secondSelect:new FormControl()
//  });

  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {

      this.openSnackBar("Input Error", "Close");
      
      return;
    }
    else{
      this.sendData();
    }
    
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    alert('successfully added')
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();

  }




  constructor(private afAuth:AngularFireAuth, private formBuilder: FormBuilder, private _snackBar: MatSnackBar){
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 80, 0, 1);
    this.currentDate = new Date();
     this.maxDate = this.currentDate;
  this.afAuth.authState.subscribe((res)=>{
      if(res){
        this.login = false;
        console.log('user is logged in ')
      }
      else{
        this.login = true;
        console.log('showing login interface.')
  }
  })
  }
  
  

  
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

  applicationType:string;
  fileStatus:string;
  memo:string;
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
  addressTwo:string;
  city:string;
  postalCode:string;
  // mailing
  addressOneMailing:string;
  addressTwoMailing:string;
  cityMailing:string;
  postalCodeMailing:string;
  countryMailing:string;
  stateMailing:string
// 
  occupation:string;
  education:string;

  maritalStatus:string;
  spouseTitle:string;
  spouseFirstName:string;
  spouseLastName:string;
  spouseMiddleName:string;
  spouseEducation:string;
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

  currentDate;
  minDate: Date;
  maxDate: Date;

emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);

login:Boolean;




 firebaseRef = firebase.default.database();


onsubmitForm(){
  console.log('onsubmit form ')
}

sendData(){

    if(!this.memo){
      this.memo="NA"
    }
    





   this.firebaseRef.ref().push({
     clientDob:this.clientDOB,

      applicationType:this.applicationType,
      fileStatus:this.fileStatus,
      memo:this.memo,
//optional
      embassyFileNo:(this.embassyFileNo)?this.embassyFileNo:"NA",

      officeFileNo:this.officeFileNo,

      EmbassyFileNo1:(this.EmbassyFileNo1)?this.EmbassyFileNo1:"NA",
      
      firstName:this.firstName,
      caseProcessName:(this.caseProcessName)?this.caseProcessName:"NA",
      middleName:(this.middleName)?this.middleName:"NA",
      lastName:this.lastName,
      clientStatus:this.clientStatus,
      otherName:(this.otherName)?this.otherName:"NA",
      whichOffice:this.whichOffice,
      whichGender:this.whichGender,
      whichNational:this.whichNational,
      whichState:this.whichState,
      whichCountry:this.whichCountry,
    
      addressOne:this.addressOne,
      addressTwo:(this.addressTwo)?this.addressTwo:"NA",
      city:this.city,
      postalCode:this.postalCode,
      // mailing
      addressOneMailing:this.addressOneMailing,
      addressTwoMailing:this.addressTwoMailing,
      cityMailing:this.cityMailing,
      postalCodeMailing:this.postalCodeMailing,
      countryMailing:this.countryMailing,
      stateMailing:this.stateMailing,
    // 
      occupation:this.occupation,
      education:this.education,
    
      maritalStatus:this.maritalStatus,
      spouseTitle:(this.spouseTitle)?this.spouseTitle:"NA",
      spouseFirstName:(this.spouseFirstName)?this.spouseFirstName:"NA",
      spouseLastName:(this.spouseLastName)?this.spouseLastName:"NA",
      spouseMiddleName:(this.spouseMiddleName)?this.spouseMiddleName:"NA",
      spouseEducation:(this.spouseEducation)?this.spouseEducation:"NA",
 
      sponsorTitle:(this.sponsorTitle)?this.sponsorTitle:" ",
    
      sponsorFirstName:this.sponsorFirstName,
      sponsorLastName:this.sponsorLastName,
      sponsorAddress:this.sponsorAddress,
      sponsorPhone:this.sponsorPhone,
    
      sponsorSpouseFirstName:this.sponsorSpouseFirstName,
      sponsorSpouseLastName:this.sponsorSpouseLastName,

      sponsorSpouseAddress:this.sponsorSpouseAddress,
      sponsorSpousePhone:this.sponsorSpousePhone
    

      });


}


checkPhone(){
        var filter = /^\d*(?:\.\d{1,2})?$/; //checking only numbers
        if(!filter.test(this.phoneNumberClient)){
          this.phoneNumberClient='';  
        }

}

//generating Random File Number
selectedApplicationType(){
  var string  = this.applicationType; 
  this.officeFileNo = this.applicationType
  var initialCharacter =string.match(/\b(\w)/g).toString().replace(/,/g, '');  
  var currentDate = new Date();
  // console.log(initialCharacter)
  // console.log(currentDate.getFullYear()%100)
  // console.log(currentDate.getMonth())
  // console.log(currentDate.getDay())
  // console.log(Math.random().toFixed(4).substring(2, 6))

  var newFileNumber = initialCharacter+""+currentDate.getFullYear()%100+currentDate.getMonth()+currentDate.getDay()+Math.random().toFixed(4).substring(2, 6);
  this.officeFileNo = newFileNumber;
  }


isMailingAddressSameBoolean:boolean;


  isMailingAddressSame(event){
    if(event.checked){
    this.isMailingAddressSameBoolean = true;

        this.addressOneMailing = this.addressOne;
        this.addressTwoMailing  = this.addressTwo;
        this.cityMailing = this.city;
        this.stateMailing = this.whichState;
        this.postalCodeMailing  = this.postalCode;
        this.countryMailing = this.whichCountry;



  }
    else{
      this.isMailingAddressSameBoolean = false;
    }

  }


  checkingmaritalStatusBoolean:boolean;
  
  checkMaritalStatus(event){  
    console.log(event.value)
    if(event.value === "Single"){
      this.checkingmaritalStatusBoolean = true;

    
      this.spouseTitle = '';
      this.spouseFirstName = '';
      this.spouseMiddleName = '';
      this.spouseLastName = '';
      this.spousedateOfBirth = '';
      // this.spouseEducation = '';

    }
    else{
      this.checkingmaritalStatusBoolean = false;
    }   
  }



  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

logOut(){
  console.log('clicking')
    this.afAuth.signOut().then(function(){
      console.log('sign out sucesfful')
    }).catch(function(error){
      console.log(error)
    })
}

}
