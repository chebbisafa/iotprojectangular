import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { DevicesRoutingModule } from "./devices-routing.module";
import { DevicesTableComponet } from "./devices-data-table/devices-data-table.component";
import {AddFormsComponent} from "./devices-forms-add/add-forms.component";

@NgModule({
    imports: [
        CommonModule,
        DevicesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
       

    ],
    declarations: [

      DevicesTableComponet,
      AddFormsComponent,
     
    ],
entryComponents: [DevicesTableComponet]
})
export class DevicesModule { }
