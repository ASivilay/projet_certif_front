import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  {
  path: 'channels/:id',
  children: [
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
