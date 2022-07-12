import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { BookServiceService } from '../../sharedmodule/service/book-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  requestForm !: FormGroup;
  bookData: any;
  displayedColumns: string[] = ['BookName', 'Author', 'Quantity', 'Category', 'Cart'];
  dataSource !: MatTableDataSource<any>;
  // count:number=0;
  // no:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog, private api: BookServiceService, private formbuilder: FormBuilder, private toastr: ToastrService, private http:HttpClient) { }

  ngOnInit(): void {
    this.getRequest();
    this.requestForm = this.formbuilder.group({

      // id:['',Validators.required],
      BookName: ['', Validators.required],
      Author: ['', Validators.required],
      Quantity: ['', Validators.required],
      Category: ['', Validators.required],
      // discription:['',Validators.required],

    })

    this.api.getBooks().subscribe(Response => {

      this.bookData = Response;
      // console.log(Response);

      // this.getAllbooks();
    });
  }
  // getAllbooks()
  //     {
  //       this.api.getmyBook()
  //       .subscribe({
  //          next:(res)=>{
  //           this.dataSource = new MatTableDataSource(res);
  //           this.dataSource.paginator=this.paginator;
  //           this.dataSource.sort=this.sort;
  //          }
  //       })
  //     }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  getRequest() {

    this.api.getRequest().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    })
    console.log(this.api.getRequest());

  }

  reqAccepted() {
    this.toastr.success('', 'Request Accepted Successfully', {
      timeOut: 3000, positionClass: 'toast-top-center'
    });

    
  }

  // deleteBook(id: number) {
  //   this.api.deleteBook(id)
  //     .subscribe({
  //       next: (res) => {
  //         // alert("Product Deleted Successfully ")
  //         this.toastr.error(' ', 'Book Deleted', {
  //           timeOut: 3000, positionClass: 'toast-top-center'
  //         })

  //       }

  //     })
  // }
}

