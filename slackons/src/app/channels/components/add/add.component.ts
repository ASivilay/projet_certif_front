import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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
    private channelService: ChannelService,
    private router: Router
  ){}

  public submitChannel(): void
  {
    this.channelService.createChannel(url, this.form.value);
    this.router.navigate(['/channels']);
  }

}
