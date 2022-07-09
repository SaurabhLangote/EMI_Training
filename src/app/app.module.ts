import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookMaterialModule } from './components/sharedmodule/book-material/book-material.module';
import { BooklistComponent } from './components/admin/booklist/booklist.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { MenuComponent } from './components/shared/menu/menu.component';
import { LoginComponent } from './components/shared/login/login.component';
import { UserhomeComponent } from './components/user/userhome/userhome.component';
import { UserBookListComponent } from './components/user/user-book-list/user-book-list.component';
import { HomeComponent } from './components/home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';
import { Menu2Component } from './components/shared/menu2/menu2.component';
import { MenuuserComponent } from './components/shared/menuuser/menuuser.component';
import { ToastrModule } from 'ngx-toastr';
import { NotificationsComponent } from './components/admin/notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    AddBookComponent,
    DashboardComponent,
    MenuComponent,
    LoginComponent,
    UserhomeComponent,
    UserBookListComponent,
    HomeComponent,
    Menu2Component,
    MenuuserComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BookMaterialModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
