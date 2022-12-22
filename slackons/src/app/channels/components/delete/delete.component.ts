import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelService } from '../../services/channels.services.service';


const url = "http://localhost:8080/api/canalgeneral/listecanaux/delete";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  public id?: number;
  public channel?: any;

  constructor(
    private channelService: ChannelService,
    private route : ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
  
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.channelService.getChannel(url, this.id);
    this.channelService.channel.subscribe(data => this.channel = data);
  }

  proceedToDelete()
  {
    this.channelService.deleteChannel(url, this.id);
    this.router.navigate(['/channels']);
  }
}

