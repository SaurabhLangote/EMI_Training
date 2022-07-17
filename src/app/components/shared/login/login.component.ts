import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from 'src/app/components/sharedmodule/service/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  
  constructor(private router: Router, private matdialog: MatDialog,private toastr:ToastrService,private service:AuthenticateService) { }
 
  ngOnInit() { }

  onSubmit(form:NgForm)
  {
    console.log(form.value);
      this.service.authenticateEmployee(form.value)
      this.matdialog.closeAll();
  }

 

}

