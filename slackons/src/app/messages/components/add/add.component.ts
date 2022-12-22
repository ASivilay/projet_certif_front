import { HttpStatusCode } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChannelService } from 'src/app/channels/services/channels.services.service';
import { MessageService } from '../../services/message.service';

const url = "http://localhost:8080/api/message/listemessages/post";

@Component({
  selector: 'app-add-message',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

    public messageForm = new FormGroup({
      username: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
    ]) ,
      content: new FormControl('')
  });

  onSubmit() {
    console.warn(this.messageForm.value);
    
  }

  constructor(
    private messageService: MessageService,
  ){}

  public submitMessage(): void
  {
    this.messageService.createMessage(url, this.messageForm.value)

  }

}
