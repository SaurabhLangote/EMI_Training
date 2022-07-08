import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

constructor(public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
  }
openDialog(){
    this.dialog.open(LoginComponent);
  }

  logout(){
    this.router.navigateByUrl('/home')
  }
  BookList()
  {
    this.router.navigateByUrl('dashboard/booklist');
  }
}
