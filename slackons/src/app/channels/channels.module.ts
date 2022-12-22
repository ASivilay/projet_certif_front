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
//import { AddComponent as AddComponentMessage } from '../messages/components/add/add.component';
import { MessagesModule } from '../messages/messages.module';



@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    DeleteComponent,
    EditComponent,
    ShowComponent,
    //AddComponentMessage,
  ],
  imports: [
    CommonModule,
    MessagesModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChannelsRoutingModule
  ],
  exports: [
    ListComponent,
    AddComponent,
  ]
})
export class ChannelsModule { }
