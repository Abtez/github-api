import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { UserServiceService } from './user-service.service';
import { TimeCalcPipe } from './time-calc.pipe';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {path: 'github-profile', component:GithubProfileComponent},
  {path: 'about', component:AboutComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GithubProfileComponent,
    TimeCalcPipe,
    AboutComponent,
  ],
  imports: [
  [RouterModule.forRoot(routes)],
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports: [RouterModule],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
