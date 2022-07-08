import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookServiceService } from '../../sharedmodule/service/book-service.service';

@Component({
  selector: 'app-user-book-list',
  templateUrl: './user-book-list.component.html',
  styleUrls: ['./user-book-list.component.css'],
  providers:[BookServiceService]
})
export class UserBookListComponent implements OnInit {

  bookData: any;

  displayedColumns: string[] = ['BookName', 'Author', 'Quantity', 'Category','Cart'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
    searchText:any;
  constructor(public dialog: MatDialog, private api: BookServiceService) { }

  ngOnInit(): void {

    this.api.getBooks().subscribe(Response => {

      this.bookData = Response;
      // console.log(Response);

      this.getAllbooks();
    });
  }

  getAllbooks()
  {
    this.api.getmyBook()
    .subscribe({
       next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator=this.paginator;
        this.dataSource.sort=this.sort;
       }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
