import { Injectable } from '@angular/core';
import { MessagesInterface, MessagesInterfaceTab } from '../interface/messages-interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private _messages: MessagesInterfaceTab = []

  constructor() { }

  public get messages(): MessagesInterfaceTab
  {
    return this._messages;
  }

  public set messages(messages: MessagesInterfaceTab)
  {
    this._messages = messages;
  }

  public getMessage(id: number): MessagesInterface | undefined
  {
    for (let message of this._messages)
    {
      if (message.id === id)
      {
        return message;
      }
      
    }

    return undefined;
  }
}
