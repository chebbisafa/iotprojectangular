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
      loading = false;
    error = '';
    onSubmit() {
     
        this.loading = true;
     
      this.userS.authentification(this.user).subscribe(
      result => { 
           
            // this works!
            console.log(result);
            if (!result)
            {
                this.error = 'Email ou mot de passe est incorrect';
                this.loading = false; 
            }
           else {
               console.log(localStorage.getItem('token'));
                console.log("ok")
                this.loginForm.reset();
                this.router.navigate(['../dashboard/dashboard1'], { relativeTo: this.route.parent });

            }
        }
     
    );}







}