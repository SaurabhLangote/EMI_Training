import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BookServiceService } from '../../sharedmodule/service/book-service.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  requestForm !: FormGroup;
  bookData: any;
  displayedColumns: string[] = ['BookName', 'Author', 'Quantity', 'Category','Cart'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
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

  /*-request-*/
//   sendRequest(no:any){
//     if(no>3){
//      alert("You cross the limit");
//     }
//     else{
//      if(this.requestForm.valid){
//        this.api.requestBook(this.requestForm.value)
//        .subscribe({
//          next:(res)=>{
//            alert("send request successfully")
           
//          }
//        })
//      }
//     }
//    }

//    reqBook(data:any){
    
//     this.requestForm.controls['id'].setValue(data.id);
//     this.requestForm.controls['bookName'].setValue(data.bookName);
//     this.requestForm.controls['category'].setValue(data.category);
//     this.requestForm.controls['authorName'].setValue(data.authorName);
//     this.requestForm.controls['discription'].setValue(data.discription);
//     this.requestForm.controls['quantity'].setValue(data.quantity);
//     this.sendRequest(this.count);
//     this.count++;
//     console.log(this.count);
//     }

//     getAllRequests(){
//       this.api.getRequest()
//       .subscribe({
//         next:(res)=>{
//           this.dataSource=new MatTableDataSource(res);
//           this.dataSource.paginator=this.paginator;
//           this.dataSource.sort=this.sort
//           this.no = res.length;
//         },
//         error:(err)=>{
//           alert("Error while fetching the data")
//         }
//       })

// }

}
