import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ChannelService } from '../../services/channels.services.service';

const url = "http://localhost:8080/api/canalgeneral/listecanaux/patch";


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id?: number;
  public form: FormGroup;

  constructor(
    private channelService : ChannelService,
    private route : ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ){
    this.form = this.fb.group({
      name: []
    })
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.channelService.getChannel("http://localhost:8080/api/canalgeneral/listecanaux/trouver", this.id);
    this.channelService.channel.subscribe(data => {

      this.form.patchValue({
        name: data.name
      });

    });
  }

  public submitChannel(): void
  {
    this.channelService.editChannel(url, this.id, this.form.value);
    this.router.navigate(['/channels']);
  }


}
