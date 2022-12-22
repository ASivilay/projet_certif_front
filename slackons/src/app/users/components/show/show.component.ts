import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

const url = "http://localhost:8080/api/user/listeusers/trouver"

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public id?: number;
  public user?: any;

  constructor(
    private userService : UserService,
    private route : ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(url, this.id);
    this.userService.user.subscribe(data => this.user = data);
  }

}
