import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChannelService } from '../../services/channels.services.service';

const url = "http://localhost:3000/channels";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  public form = new FormGroup({
    name : new FormControl()
  });

  constructor(
    private channelService: ChannelService
  ){}

  public submitBook(): void
  {
    this.channelService.createChannel(url, this.form.value)
  }

}
