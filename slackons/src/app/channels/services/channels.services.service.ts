import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private _book = new BehaviorSubject<any>({});


  constructor() {
    
   }
/*
   public getChannelFromDatabase(url: string): void
   {
     // this.httpClient.get(url).subscribe(response => this._books = response)
     this.httpClient.get(url).subscribe(response => this._channelss.next(response));
   }
 
   public get channels()
   {
     return this._channels;
   }
*/

  
}
