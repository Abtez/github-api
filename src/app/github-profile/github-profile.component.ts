import { ReposClass } from './../repos-class';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import  { User } from '../user' 
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  userInfo:User;
  userName:User;
  repos:ReposClass;

  constructor(private userService: UserServiceService) {
  
   }

  searchUser(){
    this.userService.updateInfo(this.userName);
      let promise = new Promise((resolve, reject) => {
      this.userService.getProfileInfo().toPromise().then( response =>{
        this.userInfo = response;
        console.log(response);
        
        this.userService.getRepos().toPromise().then( data => {
          this.repos = data;
          console.log(data);
          
        })
        
        
        resolve()
      },
      error =>{
       alert("An error Occured. Please Wait!");
       
        reject(error)
  
      })
  
     })
  }

  ngOnInit(){}

}
