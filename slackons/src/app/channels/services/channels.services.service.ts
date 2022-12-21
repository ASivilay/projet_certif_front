import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private _channels = new BehaviorSubject<any>({});
  private _channel = new BehaviorSubject<any>({});


  constructor(
    private httpClient: HttpClient
  ) {
    
   }

   public getChannelsFromDatabase(url: string): void
   {
     // this.httpClient.get(url).subscribe(response => this._books = response)
     this.httpClient.get(url).subscribe(response => this._channels.next(response));
   }
 
   public get channels()
   {
     return this._channels;
   }

   public getChannel(url: string, id: number)
   {
     url = `${url}/${id}`;
     this.httpClient.get(url).subscribe(response => this._channel.next(response))
   }
 
   public get channel()
   {
     return this._channel;
   }

   public createChannel(url: string, channel: any)
   {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers
    };

    this.httpClient.post(url, channel, options).subscribe(response => this._channel.next(response))

   }

}
