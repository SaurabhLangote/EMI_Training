import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators,FormBuilder, } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { BookServiceService } from '../../sharedmodule/service/book-service.service';
import { UserServiceService } from '../../sharedmodule/service/user-service.service';

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
  count:number=0;
  no:any;
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;
  constructor(public dialog: MatDialog,
     private api: BookServiceService,
     private formbuilder:FormBuilder,
     private requestapi:UserServiceService,
     private toastr: ToastrService) { }

  ngOnInit(): void {


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
  sendRequest(no:any){
    if(no>2){
    //  alert("You cross the limit");
     this.toastr.error('','You crossed the limit,3 Requests Only',{
      timeOut: 3000,positionClass: 'toast-top-center'
    })
    }
    else{
     
      if(this.requestForm.valid){
      console.log(this.requestForm.value);

       this.requestapi.requestBook(this.requestForm.value)
       .subscribe({
         next:(res)=>{
          //  alert("send request successfully");
           this.toastr.success('','Send Request Successfully',{
            timeOut: 3000,positionClass: 'toast-top-center'
          })
           
         }
       })
      }
     
    }
   }

   requestBook(data:any){

    
    
    // this.requestForm.controls['id'].setValue(data.id);
    this.requestForm.controls['BookName'].setValue(data.BookName);
    this.requestForm.controls['Author'].setValue(data.Author);
    this.requestForm.controls['Quantity'].setValue(data.Quantity);
    this.requestForm.controls['Category'].setValue(data.Category);
    
    
    this.sendRequest(this.count);
    this.count++;
    console.log(this.count);
    }

    getAllRequests(){
      this.api.getRequest()
      
      .subscribe({
        next:(res:any)=>{
          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort
          this.no = res.length;
        },
        error:(err)=>{
          alert("Error while fetching the data")
        }
      })

}

}
