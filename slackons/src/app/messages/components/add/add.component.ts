import { HttpStatusCode } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
      username: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(30),
    ]) ,
      content: new FormControl('' ,[
      Validators.required,
      Validators.minLength(1)
      ]),
     datetime: new FormControl(new Date)
  });

  onSubmit() {
    console.warn(this.messageForm.value);
    
  }

  constructor(
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }

  redirectTo(uri:string){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri]));
  }
  //settimeout

  public submitMessage(): void
  {
    this.messageService.createMessage(url, this.messageForm.value, this.id)
    this.redirectTo('/channels/'+ this.id)

  }





}
