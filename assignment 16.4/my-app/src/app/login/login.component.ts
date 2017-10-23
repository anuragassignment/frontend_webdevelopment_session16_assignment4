import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginForm: NgForm;
  db = sessionStorage;
  loginSt = true;
  constructor(private auth: AuthService, private route: Router) { }
  
  // data stored in session storage on ngOnInit
  ngOnInit() {
    this.db.setItem('username', 'johndoe');
    this.db.setItem('password', 'pass123');
  }

  onSubmit(form: NgForm) {
    this.auth.usrnm = this.loginForm.value.username;
    this.auth.password = this.loginForm.value.password;
    this.auth.db = this.db;
    this.loginSt = this.auth.logIn();
    if (this.loginSt) {
      this.route.navigate(['../member']);
    }
    setTimeout(loginSt => { this.loginSt = true; }, 5000);
    this.loginForm.reset();
  }

  reset() {
    this.loginForm.reset();
  }
}
