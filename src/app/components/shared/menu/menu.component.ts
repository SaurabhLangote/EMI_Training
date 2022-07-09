import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookServiceService } from '../../sharedmodule/service/book-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
constructor(public dialog: MatDialog,private router:Router,private toastr:ToastrService,private api:BookServiceService, private http:HttpClientModule ) { }

  ngOnInit(): void {
  }
openDialog(){
    this.dialog.open(LoginComponent);
  }

  logout(){
    this.router.navigateByUrl('/home') ;this.toastr.success('','You Logged Out',{
      timeOut: 3000,positionClass: 'toast-top-center'
    })
  }
  BookList()
  {
    this.router.navigateByUrl('dashboard/booklist');
  }

  requestGot()
  {

    this.router.navigateByUrl('dashboard/notifications');
    // return this.api.getRequest()
    // .subscribe({
    //   next:(res:any)=>{
    //     this.dataSource=new MatTableDataSource(res);
    //     this.dataSource.paginator=this.paginator;
    //     this.dataSource.sort=this.sort
    //     // this.no = res.length;
    //   },
    //   error:(err)=>{
    //     alert("Error while fetching the data")
    //   }
    // })
  }

  toHome()
  {
    this.router.navigateByUrl('dashboard');
  }
}
