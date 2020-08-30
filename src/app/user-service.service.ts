import { ReposClass } from './repos-class';
import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import 'rxjs/add/operator/map';
//map opeator returns results as observables from git


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 private userName;
 private api = environment.apiUrl;

  constructor(private http: HttpClient) { 
  }

  getProfileInfo(){
   return this.http.get<User>("https://api.github.com/users/" + this.userName).map((response: any) => response);
  }

  getRepos(){
    return this.http.get<ReposClass>("https://api.github.com/users/" + this.userName + "/repos").map((response: any) => response);
  }

  updateInfo(userName:User){
    this.userName = userName;
  }

}
