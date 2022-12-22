import { HttpStatusCode } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from 'src/app/channels/services/channels.services.service';
import { MessageService } from '../../services/message.service';

const url = "http://localhost:8080/api/message/listemessages/post";

@Component({
  selector: 'app-add-message',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
    
    public id?: number;

    public messageForm = new FormGroup({
    //   username: new FormControl('',[
    //   Validators.required,
    //   Validators.minLength(4),
    // ]) ,
      content: new FormControl('' ,[
      Validators.required,
      Validators.minLength(4)
      ]),
     datetime: new FormControl(new Date),
     username: new FormControl()
  });

  onSubmit() {
    console.warn(this.messageForm.value);
    
  }

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  public submitMessage(): void
  {
    this.messageService.createMessage(url, this.messageForm.value, this.id)

  }


}
