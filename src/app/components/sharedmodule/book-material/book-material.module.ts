import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSortModule} from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

const arr = [MatToolbarModule,MatIconModule,MatDialogModule,MatFormFieldModule,
FormsModule,MatButtonModule,MatTableModule,MatPaginatorModule,MatSelectModule,
MatBadgeModule,MatSortModule,MatCardModule,MatInputModule]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    arr
  ],
  exports:[
    arr
  ]
})
export class BookMaterialModule { }
