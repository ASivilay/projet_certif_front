import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ChannelService } from '../../services/channels.services.service';

const url = "http://localhost:8080/api/canalgeneral/listecanaux/post";

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
