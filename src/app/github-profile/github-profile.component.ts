import { HttpClient } from '@angular/common/http';
import { UserServiceService } from './../user-service.service';
import { Component, OnInit } from '@angular/core';
import  { User } from '../user' 

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.scss']
})
export class GithubProfileComponent implements OnInit {

  constructor(private userService: UserServiceService) {
    this.userService.getProfileInfo().subscribe(userInfo => {
      console.log(userInfo);
    });
   }

  ngOnInit(): void {
  }

}
