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

  constructor(private userService: UserServiceService) {
    this.userService = this.userService;

    /*let promise = new Promise((resolve, reject) => {
     this.userService.getProfileInfo().toPromise().then( response =>{
       this.userInfo = response;
       
       
       resolve()
     },
     error =>{
      console.log("An error Occured");
      
       reject(error)

     })

    })*/
   }



  ngOnInit(): void {
  }

}
