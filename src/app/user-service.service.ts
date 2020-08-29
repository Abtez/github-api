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
    this.userName = "abzed";
  }

  getProfileInfo(){
   return this.http.get<User>("https://api.github.com/users/" + this.userName).map((response: any) => response);
  }

}
