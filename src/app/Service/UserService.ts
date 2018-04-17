import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from '../Models/User';
import {Observable} from 'rxjs/Observable';
//import {catchError, map, tap} from 'rxjs/operator';

@Injectable()
export class UserService{
  constructor(private http:Http) { }
  user : User ;
  getAlluserdetails(){
    return this.http.get('http://localhost:3000/api/Allusers').map((response: Response) => response.json());
  }


  addUserService(user:any){

    return this.http.post('http://localhost:3000/api/Adduser',user).map((response: Response) => response.json());
  }


  authentification(user:any){

    return this.http.post('http://localhost:3000/api/authentification',user).map((response: Response) => response.json());
  }
 

  delUserService(id){
    return this.http.delete('http://localhost:3000/api/Supuser/'+id).map((response: Response) => response.json());
  }


  UpdateUser(email,password,numTel,adresse,id_user){
    return this.http.put('http://localhost:3000/api/Updateuser',{email,password,numTel,adresse,id_user}).map((response: Response) => response.json());
  }
}
