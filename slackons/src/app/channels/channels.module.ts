import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelsRoutingModule } from './channels-routing.module';

import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'
import { MessagesModule } from '../messages/messages.module'; 



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
    ReactiveFormsModule,
    ChannelsRoutingModule,
    MessagesModule,
  ]
})
export class ChannelsModule { }
