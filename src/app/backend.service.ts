import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  constructor(
    private http: HttpClient,
    public afAuth: AngularFireAuth
  ) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  private rootUrl = "http://localhost:3000";
//
  // private rootUrl = "";
  search(searchString, searchIndex){
    var obj = {
      searchVal:searchString,
      searchIndex:searchIndex
    }
    return this.http.post(this.rootUrl + "/backEndSearch", obj, this.httpOptions);
}
displayNotes_backend(objectId){
// console.log(objectId, 'inside backend')
  var obj = {
    searchVal:objectId,
    searchIndex:"notes_display_index"
  }
  return this.http.post(this.rootUrl + "/backEndSearch", obj, this.httpOptions);
}
}