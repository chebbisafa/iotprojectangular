import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsersRoutingModule } from "./users-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UsersTableComponent } from "./users-data-table/users-data-table.component";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule, JsonpModule} from "@angular/http";

@NgModule({
    imports: [
      CommonModule,
      UsersRoutingModule,
      Ng2SmartTableModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
      ,HttpModule,
      JsonpModule,

    ],
    declarations: [
      UsersTableComponent,
    ],
  entryComponents: [
    //UsersTableComponent,
  ]
})
export class UsersModule { }
