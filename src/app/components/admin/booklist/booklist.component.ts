import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookServiceService } from '../../sharedmodule/service/book-service.service';
import { AddBookComponent } from '../add-book/add-book.component';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  bookData: any;
  displayedColumns: string[] = ['id','BookName', 'Author', 'Quantity', 'Category','Edit'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  constructor( public dialog: MatDialog, private api: BookServiceService) { }

  ngOnInit(): void {

    this.api.getBooks().subscribe(Response => {

      this.bookData = Response;
      // console.log(Response);

      this.getAllbooks();
    });

    
  }

  addBook() {
    this.dialog.open(AddBookComponent)
      .afterClosed()
      .subscribe(val =>{
      if (val === 'save'){
        this.getAllbooks();
      
      }
    
    })
   
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

  editData(row:any){
    this.dialog.open(AddBookComponent,{
    data:row
  }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllbooks();
      }
  })
   
  }

   deleteBook(id:number)
   {
    this.api.deleteBook(id)
    .subscribe({
      next:(res)=>{
        alert("Product Deleted Successfully ")
        this.getAllbooks();
      }

    })
   }

}
function AddComponent(AddComponent: any, arg1: { data: any; }) {
  throw new Error('Function not implemented.');
}

