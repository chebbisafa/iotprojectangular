import { Component, ViewChild,Input , Output , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../../../../Models/User'
import {UserService} from '../../../../Service/UserService'
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})
@Injectable()
export class RegisterPageComponent implements OnInit {
    @ViewChild('f') registerForm: NgForm;

    //  On submit click, reset field value
  
    user = new User();
    messageText: string;
    messageTextStyle:string;
    
    constructor(private userS:UserService ,private router: Router,
      private route: ActivatedRoute) { }
    
    ngOnInit() {
    }
  
    onSubmit() {
       this.user.dateAjout= new Date();
       this.user.role="prospecteur";
      console.log(this.user);
      this.userS.addUserService(this.user).subscribe();
       /* if (!data.success) {
          this.messageText="erreur";
        } else {
          this.messageText="ok";
          this.registerForm.resetForm();
          this.router.navigate(['login'], { relativeTo: this.route.parent });
        }*/
        
        this.router.navigate(['login'], { relativeTo: this.route.parent });
        this.registerForm.reset();
        
      }

     
    



    }












