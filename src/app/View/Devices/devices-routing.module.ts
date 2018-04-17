import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DevicesTableComponet} from "./devices-data-table/devices-data-table.component";
import {AddFormsComponent} from "./devices-forms-add/add-forms.component";

const routes: Routes = [
  {
    path: '',
    children: [

      {
        path: 'listdevices',
        component: DevicesTableComponet,
        data: {
          title: 'Liste des devices'
        }
      },

      {
        path: 'adddevice',
        component: AddFormsComponent,
        data: {
          title: 'Ajouter un device'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DevicesRoutingModule { }
