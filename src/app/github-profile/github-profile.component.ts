import { ReposClass } from './../repos-class';
import { HttpClient } from '@angular/common/http';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import  { User } from '../user' 
import 'rxjs/add/operator/map';
import $ from 'jquery'

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  userInfo:User;
  repos:ReposClass;

  constructor(private userService: UserServiceService) {
    this.userService.getProfileInfo().subscribe(userInfo =>{
      this.userInfo = userInfo
      console.log(userInfo);
    });
    this.userService.getRepos().subscribe(repos =>{
      this.repos = repos;
      console.log(repos);
      
    })

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
  $(document).ready(function(){
    $("#view-repo").click(function(){
      $(".hidden").slideToggle();
    })
  })
  }

}
