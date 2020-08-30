import { GithubProfileComponent } from './../github-profile/github-profile.component';
import { ReposClass } from './../repos-class';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {

  @Input() repos:ReposClass;

  constructor() { }

  ngOnInit(): void {
  }

}
