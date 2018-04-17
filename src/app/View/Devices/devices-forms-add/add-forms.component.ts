import { Component, ViewChild,Input , Output , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {DeviceService} from '../../../Service/DeviceService';
import {UserService} from '../../../Service/UserService';
import {Device} from '../../../Models/Device';
import {User} from '../../../Models/User';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-add-forms',
    templateUrl: './add-forms.component.html',
    styleUrls: ['./add-forms.component.scss']
})
@Injectable()
export class AddFormsComponent implements OnInit {
    @ViewChild('f') addForm: NgForm;
    
    user = new User();
    device=new Device();
    messageText: string;
    messageTextStyle:string;
    
    constructor(private userS:UserService ,private router: Router,
      private route: ActivatedRoute,private deviceservice:DeviceService) { }
    ngOnInit() {
        $.getScript('./assets/js/jquery.steps.min.js');
        $.getScript('./assets/js/wizard-steps.js');
        
    }

    onSubmit() {
       
        this.device.user_id_device= "AUTH"
        this.device.pwd_id="jjjjj"; 
        this.device.id_user=1;
        console.log(this.device);
        this.deviceservice.addDevice(this.device).subscribe();
        /* if (!data.success) {
           this.messageText="erreur";
         } else {
           this.messageText="ok";
           this.registerForm.resetForm();
           this.router.navigate(['login'], { relativeTo: this.route.parent });
         }*/
         
        // this.router.navigate(['login'], { relativeTo: this.route.parent });
         this.addForm.reset();
         
       }
 
}
