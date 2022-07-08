import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  constructor(private http:HttpClient) { }
  // Add Book
    postBook(data:any){
  
      return this.http.post<any>("http://localhost:3000/books/",data);
    }
  //get all book
    getmyBook()
    {
         return this.http.get<any>("http://localhost:3000/books/");
    }
  
    putProduct(data:any,id:number)
    {
      return this.http.patch<any>("http://localhost:3000/books/"+id,data);
    }
  
    deleteBook(id:number)
    {
      return this.http.delete<any>("http://localhost:3000/books/"+id )
    }
  
     getBooks()
     {
        return this.http.get('http://localhost:3000/books')
     
     }
     getBookById(id:any){
      return this.http.get("http://localhost:3000/books/"+id)
     }
}
