import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent} from "./Contact-SSCF/contact.component";

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'contactSSCF',
        component: ContactComponent,
        data: {
          title: 'Contacts',
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule { }
