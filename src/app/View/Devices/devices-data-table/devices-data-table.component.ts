import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {OnInit} from "@angular/core";
//import {MatDialog} from '@angular/material';
import { Injectable } from '@angular/core';
import {DeviceService} from '../../../Service/DeviceService'
import {Device} from '../../../Models/Device';
import {NgbModal, NgbModalRef ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-devices-data-table',
    templateUrl: './devices-data-table.component.html',
    styleUrls: ['./devices-data-table.component.scss'],
   
}) 
@Injectable()
export class DevicesTableComponet implements OnInit {
 
  modalRef :  NgbModalRef ;
  id_current :string  ; 
  temp_device:any;
  closeResult:string;
  datadevice:any;
  device=new Device();
  constructor(private deviceServise:DeviceService,private modalService: NgbModal) {
  }

  ngOnInit() {
  setInterval(()=>{
    return this.deviceServise.getAllDevice().subscribe(data=>this.temp_device =data.response)

  },1000);
  }

//delete 
  open(id,content) {
    this.id_current=id ; 
      console.log("open"+this.id_current);
  this.modalRef =  this.modalService.open(content);
  this.modalRef.result.then((result) => {
     
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
supp(content){
  
  console.log("confirme"+this.id_current);
  this.deviceServise.delDeviceService(this.id_current).subscribe(data => {data=>this.temp_device =data.response; this.ngOnInit();});
  
  this.modalRef.close();
}
//update
openupdate(device,content1) {
  this.datadevice=device; 
  console.log("open"+ this.datadevice.device_id);
this.modalRef =  this.modalService.open(content1);
this.modalRef.result.then((result) => {

    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    

    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  })
}

update(){
  
  console.log("confirme"+ this.datadevice.device_id);
 // console.log("confirme"+ this.datadevice.statut);
  console.log("confirme"+this.device.statut);
 
    
    var x=this.device.statut
    var y=this.datadevice.device_id;
  
  this.deviceServise.UpdateDevice(this.device.statut,this.datadevice.device_id).subscribe(data => {data=>this.temp_device =data.response; this.ngOnInit();});


  this.modalRef.close();
}


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }



 
  }

  
    
  
  







