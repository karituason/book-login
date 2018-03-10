import { Component, OnInit } from '@angular/core';
import {RouterModule, Router, RouterLink} from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cm-login',
  templateUrl: './login.component.html',
})

export class LoginComponent {
  public user: any = {username:"", password:""};
  private valid: any = {username: "user", password: "password"};
  misMatch:boolean;
  logTry:boolean;
  constructor(private _router: Router) { 
    
  }

  login(form:NgForm){
    this.logTry = true;
    if(!form.invalid){
        console.log("in log in");
        if (this.valid.username === this.user.username && this.valid.password === this.user.password){
            this.misMatch = false;
            this._router.navigate(['/home']);
        } else {
            this.misMatch = true;
        }
    } 
  }
}   