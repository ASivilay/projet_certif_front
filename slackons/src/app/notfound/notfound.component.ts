import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {

  constructor(
    private httpClient: HttpClient
  ) {}
  
  public notfound(url: string, id: number|undefined): void 

  
  {
    url = `${url}?id=${id}`;

  }

  
}
