import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [{
  path: 'channels/:id',
  children: [
  
      // list messages per channel
    {
    path: '',
    component: ListComponent
    },
  
    // add a message into the specified channel
    {
    path: 'add',
    component: AddComponent
    },
  
  ]
  },
  
  
  ];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
