import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';


import { MessagesRoutingModule } from './messages-routing.module';
import { AddComponent } from './components/add/add.component';
import { DeleteComponent } from './components/delete/delete.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './show/show.component';
import { ReactiveFormsModule } from '@angular/forms'


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
    MessagesRoutingModule,
      ],
    exports: [
    AddComponent,
      ]
})
export class MessagesModule { }
