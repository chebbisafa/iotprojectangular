import { Component, ViewChild,Input , Output , OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from '../../../../Models/User'
import {UserService} from '../../../../Service/UserService'
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})
@Injectable()
export class LoginPageComponent implements OnInit {

    @ViewChild('f') loginForm: NgForm;

    constructor(private router: Router,
        private route: ActivatedRoute,private userS:UserService) { }

        ngOnInit() {
        }

    // On Forgot password link click
    onForgotPassword() {
        this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
        this.router.navigate(['register'], { relativeTo: this.route.parent });
    }


    user =new User();
    data : any;
    onSubmit() {
     
      this.userS.authentification(this.user).subscribe(
        data => { 
           
            this.data = data;
        },
        err => console.log(err),
        () => {
            // this works!
            console.log(this.data.response[0]);
            console.log(this.data.response[0]['role']);
            if (this.data.response[0] =1)
            {
                console.log("ok")
                this.loginForm.reset();
                this.router.navigate(['../dashboard/dashboard1'], { relativeTo: this.route.parent });

            }
        }
    );
    
       
        
      
    }

     





}