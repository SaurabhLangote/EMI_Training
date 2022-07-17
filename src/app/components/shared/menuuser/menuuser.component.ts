import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticateService } from '../../sharedmodule/service/authenticate.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menuuser',
  templateUrl: './menuuser.component.html',
  styleUrls: ['./menuuser.component.css']
})
export class MenuuserComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private router:Router,
    private toastr:ToastrService,
    public authService:AuthenticateService) { }

  ngOnInit(): void {
  }


  logout(){
    this.router.navigateByUrl('/home');this.toastr.success('','You Logged Out',{
      timeOut: 3000,positionClass: 'toast-top-center'
    })
  }

}
