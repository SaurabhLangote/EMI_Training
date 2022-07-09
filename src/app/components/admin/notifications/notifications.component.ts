import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookServiceService } from '../../sharedmodule/service/book-service.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {
  requestForm !: FormGroup;
  bookData: any;
  displayedColumns: string[] = ['BookName', 'Author', 'Quantity', 'Category','Cart'];
  dataSource !: MatTableDataSource<any>;
  // count:number=0;
  // no:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor(public dialog: MatDialog,private api: BookServiceService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.getRequest();
    this.requestForm=this.formbuilder.group({

      // id:['',Validators.required],
      BookName:['',Validators.required],
      Author:['',Validators.required],
      Quantity:['',Validators.required],
      Category:['',Validators.required],
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


    getRequest()
    {
      console.log(this.api.getRequest());
      
    }
  }

