import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import {AngularFireAuth} from '@angular/fire/auth';

import * as firebase from 'firebase';
import { MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY } from '@angular/material/select';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientDatabase';

  applicationTypeArray = ['first', 'second','third'];
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

  sponsorFirstName:string;
  sponsorLastName:string;
  sponsorAddress:string;
  sponsorPhone:string;

  sponsorSpouseFirstName:string;
  sponsorSpouseLastName:string;
  sponsorSpouseAddress:string;
  sponsorSpousePhone:string;



  currentDate;
  minDate: Date;
  maxDate: Date;

emailFormControl = new FormControl('', [
  Validators.required,
  Validators.email,
]);

login:Boolean;


constructor(private afAuth:AngularFireAuth){
  const currentYear = new Date().getFullYear();
  this.minDate = new Date(currentYear - 80, 0, 1);
  this.currentDate = new Date();
   this.maxDate = this.currentDate;


this.afAuth.authState.subscribe((res)=>{
    if(res){
      // user logged in 
      this.login = false;
      console.log('user is logged in ')
    }
    else{
      this.login = true;
      console.log('showing login interface.')
      // need to log in
}
})

   
  

}
 


firebaseRef = firebase.default.database();

sendData(){
    this.firebaseRef.ref("data/").push({

      applicationType:this.applicationType,
      fileStatus:this.fileStatus,
      memo:this.memo,
      embassyFileNo:this.embassyFileNo,
      officeFileNo:this.officeFileNo,
      EmbassyFileNo1:this.EmbassyFileNo1,
      firstName:this.firstName,
      caseProcessName:this.caseProcessName,
      middleName:this.middleName,
      lastName:this.lastName,
      clientStatus:this.clientStatus,
      otherName:this.otherName,
      whichOffice:this.whichOffice,
      whichGender:this.whichGender,
      whichNational:this.whichNational,
      whichState:this.whichState,
      whichCountry:this.whichCountry,
    
      addressOne:this.addressOne,
      addressTwo:this.addressTwo,
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
      spouseTitle:this.spouseTitle,
      spouseFirstName:this.spouseFirstName,
      spouseLastName:this.spouseLastName,
      spouseMiddleName:this.spouseMiddleName,
      spouseEducation:this.spouseEducation,
      sponsorTitle:this.sponsorTitle,
    
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

logOut(){
  console.log('clicking')
    this.afAuth.signOut().then(function(){
      console.log('sign out sucesfful')
    }).catch(function(error){
      console.log(error)
    })
}

}
