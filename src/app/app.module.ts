
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./View/shared/shared.module";
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AgmCoreModule } from '@agm/core';
import { ContentLayoutComponent } from "./View/layouts/content/content-layout.component";
import { FullLayoutComponent } from "./View/layouts/full/full-layout.component";
import { CustomOption } from "./View/shared/toastr/custom-option";
import {UserService} from "./Service/UserService";
import {DeviceService} from "./Service/DeviceService";
import {HttpModule, JsonpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import * as $ from 'jquery';
import { AuthGuard } from './View/shared/routes/auth.guard';


@NgModule({
    declarations: [

        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent,
        
    ],
    imports: [
        HttpClientModule,
        HttpModule,
        JsonpModule,
        MatDialogModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
       
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        })
    ],
    providers: [

        UserService,
        DeviceService,
        AuthGuard,
        
        //Toastr providers
        { provide: ToastOptions, useClass: CustomOption }
    ],
    bootstrap: [AppComponent],
    entryComponents: [AppComponent]
   

})
export  class AppModule { }
