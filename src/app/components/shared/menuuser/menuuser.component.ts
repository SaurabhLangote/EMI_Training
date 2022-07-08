import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menuuser',
  templateUrl: './menuuser.component.html',
  styleUrls: ['./menuuser.component.css']
})
export class MenuuserComponent implements OnInit {

  constructor(public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.router.navigateByUrl('/home')
  }

}
