import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  isuser=false;
  isadmin=false;
  isAuthenticated=false;
  data:any;
  user:any;
  response:any

  constructor(private http:HttpClient,private router:Router,private toastr:ToastrService) { }

   public authenticateEmployee(data:any)
   {
      this.http.get("http://localhost:3000/Authenticate").subscribe(Response=>{ 
            this.user=Response;
            this.data=data;
            this.authenticateUser();
            this.navigateUser();
      })
   }
 
   public authenticateUser() {
    this.response = (this.user.find((x: any) => {
      return x.username == this.data.username && x.password == this.data.password
    })) 
   
  }
  
navigateUser(){
  if(this.response)
  {
    this.navigate();
  }
  else{
    alert ("Invalid Credential");
  }
}
  public navigate() {
    this.isAuthenticated=true;
    if (this.response.role === 'admin') {
      this.isadmin = true;
      this.isAuthenticated = true;
      this.router.navigateByUrl("dashboard")
      
    } else if (this.response.role === 'user') {
      this.isuser = true;
      this.isAuthenticated = true;
      this.router.navigateByUrl("userhome")
     
    }else {
      alert("Invalid Credentials")
    }
    
  }

}
