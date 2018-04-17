import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersTableComponent } from "./users-data-table/users-data-table.component";

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'listusers',
        component: UsersTableComponent,
        data: {
          title: 'Utilisateurs'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
