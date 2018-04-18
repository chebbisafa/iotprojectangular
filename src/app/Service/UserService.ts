import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../Models/User';
import {Observable} from 'rxjs/Observable';
import { tokenNotExpired, JwtHelper } from 'angular2-jwt'; 
//import {catchError, map, tap} from 'rxjs/operator';

@Injectable()
export class UserService{
  currentUser:any
  constructor(private http:Http) { 
    /*let token = localStorage.getItem('token');
    if (token) {
      let jwt = new JwtHelper();
      this.currentUser = jwt.decodeToken(token);
    }*/
  }
  user : User ;
  getAlluserdetails(){
    return this.http.get('http://localhost:3000/api/Allusers').map((response: Response) => response.json());
  }


  addUserService(user:any){

    return this.http.post('http://localhost:3000/api/Adduser',user).map((response: Response) => response.json());
  }


 /*/ authentification(user:any){

    return this.http.post('http://localhost:3000/api/authentification',user).map((response: Response) => response.json());
  }*/
 

  delUserService(id){ 
    return this.http.delete('http://localhost:3000/api/Supuser/'+id).map((response: Response) => response.json());
  }


  UpdateUser(email,password,numTel,adresse,id_user){
    return this.http.put('http://localhost:3000/api/Updateuser',{email,password,numTel,adresse,id_user}).map((response: Response) => response.json());
  }



  authentification(currentUser) { 
    return this.http.post('http://localhost:3000/api/authentification',currentUser)
     .map((response:Response)  => {
      let result = response.json();
      console.log(result.result[0]);
      localStorage.removeItem('token');
      
      if (result.response) {
        localStorage.removeItem('token');
        localStorage.setItem('token', result.token);
        sessionStorage.setItem('role',result.result[0]['role']);
        let jwt = new JwtHelper();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));

        console.log(localStorage.getItem('token'));
        console.log(sessionStorage.getItem('role'));
        return true; 
     
      }
      else 
      return false;
    });
   }









}

