import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = new BehaviorSubject<any>({});
  private _user = new BehaviorSubject<any>({});


  constructor(
    private httpClient: HttpClient
  ) { }


  public getUsersFromDatabase(url: string): void
   {
     this.httpClient.get(url).subscribe(response => this._users.next(response));
   }
 
   public get users()
   {
     return this._users;
   }

   public getUser(url: string, id: number)
   {
     //url = `${url}${ "?id=" + id}`;
     url = `${url}?id=${id}`;
     this.httpClient.get(url).subscribe(response => this._user.next(response))
 
     //this.httpClient.get(url).subscribe(response => console.log(response))
    }

    public getUserByName(name: string)
    {
     this.httpClient.get(name).subscribe(response => this._user.next(response))
     return this._user;
     }

    /*
   public UserExists(name: string)
   {
    if (this.httpClient.get(name).subscribe(response => this._user.next(response)))
    
     return true;
 
     //this.httpClient.get(url).subscribe(response => console.log(response))
    }
    */

   public get user()
   {
     return this._user;
   }

   public createUser(url: string, user: any)
   {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers
    };

    this.httpClient.post(url, user, options).subscribe(response => this._user.next(response))

   }

}
