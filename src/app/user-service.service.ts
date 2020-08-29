import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//map opeator returns results as observables from git


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 private userName:User;
  private api = "68c86fc561ffdb2afcc7af30186e053b7e83a1b3"

  constructor(private http: HttpClient) { 
    this.userName = new User("abzed");
  }

  getProfileInfo(){
   return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + this.api);
  }

}
