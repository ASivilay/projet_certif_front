import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-list-messages',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  //page title
  public pageTitle:string = "Messages";

  // definition of the list
  private _messages = new BehaviorSubject<any>({});
  public messages: any = [];

   constructor(
    //private bookService: BookService,
    private httpClient: HttpClient
   ){}

  ngOnInit(): void
  {
    this.httpClient
        .get('http://localhost:3000/messages')
       // .subscribe(data => console.log(typeof data))
       // .subscribe(data => console.log(data));
        .subscribe(data => {
        this._messages.next(data);
        this._messages.subscribe(data => this.messages = data);
       })


  }
}
