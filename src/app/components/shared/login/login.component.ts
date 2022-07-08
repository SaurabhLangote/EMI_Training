import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  // loginForm:FormGroup;
  constructor(private router: Router, private matdialog: MatDialog) { }
  // username: string;
  // password: string;
  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   name:[''],
    //   designation:['']
    // });
  }
 
    login(): void {

      if (this.username == 'user' && this.password == 'user123') {
  
        this.router.navigate(["user"]);
  
      } else if (this.username == 'admin' && this.password == 'admin111') {
  
        this.router.navigate(["dashboard"]);
  
      } else {
  
        alert("Invalid credentials");
  
      }
  
  
  
      this.matdialog.closeAll();
  
  
  
    }
   
  }

