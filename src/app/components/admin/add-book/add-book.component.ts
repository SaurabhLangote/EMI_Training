import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BookServiceService } from '../../sharedmodule/service/book-service.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor (private formbuilder: FormBuilder,
    private api: BookServiceService,
    @Inject(MAT_DIALOG_DATA) public editBook: any,
    private dialogref: MatDialogRef<AddBookComponent>
  ) { }

  bookForm : FormGroup;
  actionBtn: string = "save";
  editData:any;
  ngOnInit(): void {

    this.bookForm = this.formbuilder.group({

      BookName: ['', Validators.required],
      Author: ['', Validators.required],
      Quantity: ['', Validators.required],
      Category: ['', Validators.required]

    });
    if (this.editBook) {
      this.actionBtn = "Update";
      this.bookForm.controls['BookName'].setValue(this.editBook.BookName);
      this.bookForm.controls['Author'].setValue(this.editBook.Author);
      this.bookForm.controls['Quantity'].setValue(this.editBook.Quantity);
      this.bookForm.controls['Category'].setValue(this.editBook.Category);
    }


  }
  addBook() { 
    // console.log(this.bookForm.value)
    if (!this.editBook) {
      if (this.bookForm.valid) {

        this.api.postBook(this.bookForm.value)
          .subscribe({
            next: (Response) => {
              alert("Book Added Successfully !!")
              this.bookForm.reset();
              this.dialogref.close('save');
              window.location.reload(); 
            },
            error: () => {
              alert("Error While Adding ");
            }
          })
      }
    } else {
      this.updateBook()
    }
  }
  updateBook() {
    this.api.putProduct(this.bookForm.value, this.editBook.id)
      .subscribe({
        next: (res) => {
          alert("Product Updated");
          this.bookForm.reset();
          this.dialogref.close('update');
        },
      })
  }


}
