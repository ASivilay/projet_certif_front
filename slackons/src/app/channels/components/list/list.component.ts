import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { ChannelService } from '../../services/channels.services.service';

const url = "http://localhost:8080/api/canalgeneral/listecanaux";

@Component({
  selector: 'app-list-channels',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
 // imgchannel:any = "C:/Users/marin/OneDrive/Documents/TPJAVA/slackons-devperso-images/channelexemple.png";

  //page title
  public pageTitle:string = "Channels";

  // definition of the list
  public channels: any = [];

   constructor(
    //private bookService: BookService,
    // private httpClient: HttpClient,
   private channelService: ChannelService
   ){}

   
  ngOnInit(): void
  {
    //this.httpClient
    this.channelService.getChannelsFromDatabase(url);
    this.channelService.channels.subscribe(data => this.channels = data);
  }

}
