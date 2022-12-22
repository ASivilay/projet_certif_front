import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './channels/components/list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [

  {
    path: '',
    component: ListComponent
  },

  {
    path: '**',
    component: NotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
