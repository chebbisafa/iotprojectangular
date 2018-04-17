import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Device } from '../Models/Device';
import {Observable} from 'rxjs/Observable';
//import {catchError, map, tap} from 'rxjs/operator';

@Injectable()
export class DeviceService {
  constructor(private http:Http) { }
  device : Device;


  getAllDevice(){
    return this.http.get('http://localhost:3001/api/AllDevice').map((response: Response) => response.json());
  }

  addDevice(device:any){

    return this.http.post('http://localhost:3001/api/AddDevice',device).map((response: Response) => response.json());
  }
  delDeviceService(id){
    return this.http.delete('http://localhost:3001/api/SupDevice/'+id).map((response: Response) => response.json());
  }
  UpdateDevice(statut,device_id){
    return this.http.put('http://localhost:3001/api/Updatedevice',{statut,device_id}).map((response: Response) => response.json());
  }
}
