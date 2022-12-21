import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChannelService } from '../../services/channels.services.service';

const url = "http://localhost:8080/api/canalgeneral/listecanaux/trouver"

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id?: number;
  public channel?: any;

  constructor(
    private channelService : ChannelService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.channelService.getChannel(url, this.id);
    this.channelService.channel.subscribe(data => this.channel = data);
  }

}
