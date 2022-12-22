import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
   private _messages = new BehaviorSubject<any>({});
   private _message = new BehaviorSubject<any>({});

   constructor(
    private httpClient: HttpClient,
   ) {}

   public getMessagesFromDatabase(url: string): void
   {
     this.httpClient.get(url).subscribe(response => this._messages.next(response));
   }
 
   public get messages()
   {
     return this._messages;
   }

   // transformer l' ?id= de JAVA pour l'adapter à l'Angular
   public getMessage(url: string, id: number)
   {
     url = `${url}?id=${id}`;
     this.httpClient.get(url).subscribe(response => this._message.next(response))
    }

   public get message()
   {
     return this._message;
   }

   public createMessage(url: string, message: any, id: any)
   {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers
    };

    //bourrin à rectifier: écrire en plus propre si temps
    message.channel = {};
    message.channel.id = id;
    

     /* 
     message.user = {};
     message.user.id = id; 
     if(this.userService.UserExists(message.username) == true){
      this.userService.getUserByName(username)
      return this.userService.getUser(data => this.user = data)}
    */

    this.httpClient.post(url, message, options).subscribe(response => this._message.next(response))
    //console.log(message)
  }
  
}


