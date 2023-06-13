import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    // this.http.post('https://fakestoreapi.com/products',{name:"asdfghjk",image:"sdfgh"}).subscribe(
    this.http.get('https://fakestoreapi.com/products').subscribe(

      (data)=>{
        console.log(data)
      }
    )
  }
  
  title = 'helloworld';
}
