import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './authguard.guard';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { BooklistComponent } from './components/admin/booklist/booklist.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NotificationsComponent } from './components/admin/notifications/notifications.component';
import { HomeComponent } from './components/home/home.component';
import { UserBookListComponent } from './components/user/user-book-list/user-book-list.component';
import { UserhomeComponent } from './components/user/userhome/userhome.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'addbook',component:AddBookComponent},
    {path:'booklist',component:BooklistComponent},
    {path:'notifications',component:NotificationsComponent}
  ]},
  {path:'userhome',component:UserhomeComponent,canActivate:[AuthguardGuard]},
  {path:'booklist',component:UserBookListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
