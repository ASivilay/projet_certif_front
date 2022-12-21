import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ListComponent } from './components/list/list.component';
import { ShowComponent } from './components/show/show.component';

const routes: Routes = [
  
  // channels list
{
path: 'channels',
children: [

    // list channels
  {
  path: '',
  component: ListComponent
  },

  // add channel
  {
  path: 'add',
  component: AddComponent
  },

  {
  path: ':id',
  children: [
    //show a channel
     {
        path:'',
        component: ShowComponent
      },

      //edit a channel
      {
        path:'edit',
        component: EditComponent
      },

    ]
  },

]
},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelsRoutingModule { }
