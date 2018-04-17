import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ContentPagesRoutingModule } from "./content-pages-routing.module";

import { ErrorPageComponent } from "./error/error-page.component";
import { ForgotPasswordPageComponent } from "./forgot-password/forgot-password-page.component";
import { LoginPageComponent } from "./login/login-page.component";
import { RegisterPageComponent } from "./register/register-page.component";
import {HttpClientModule} from "@angular/common/http";
import {HttpModule, JsonpModule} from "@angular/http";
import {UserService} from "../../../Service/UserService";

@NgModule({
    imports: [
        CommonModule,
        ContentPagesRoutingModule,
        FormsModule,
       /* HttpClientModule
        ,HttpModule,
        JsonpModule,*/
    ],
    declarations: [

        ErrorPageComponent,
        ForgotPasswordPageComponent,
        LoginPageComponent,
        RegisterPageComponent
    ]
})
export class ContentPagesModule { }
