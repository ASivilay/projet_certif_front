import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';

import { MessagesRoutingModule } from './messages-routing.module';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { AppRoutingModule } from '../app-routing.module';
import { ShowComponent } from './show/show.component';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    ShowComponent
      ],
  imports: [
    CommonModule,
    HttpClientModule,
    MessagesRoutingModule,
  ]
})
export class MessagesModule { }
