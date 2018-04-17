import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { AgmCoreModule } from '@agm/core';
import { ContactRoutingModule } from "./contact-routing.module";
import { ContactComponent } from "./Contact-SSCF/contact.component";

@NgModule({
    imports: [
        CommonModule,
        ContactRoutingModule,
        AgmCoreModule
    ],
    declarations: [
       ContactComponent,
    ]
})
export class ContactModule { }
