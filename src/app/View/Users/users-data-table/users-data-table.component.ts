import {Component, OnInit} from "@angular/core";
//import {MatDialog} from '@angular/material';
import { Injectable } from '@angular/core';
import {UserService} from '../../../Service/UserService'
import {User} from '../../../Models/User';
import {NgbModal, NgbModalRef ,ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-users',
  templateUrl: './users-data-table.component.html',
  styleUrls: ['./users-data-table.component.scss'],

})
@Injectable()
export class UsersTableComponent implements OnInit {

  constructor(private userServise:UserService,private modalService: NgbModal) {
  }
  /*openDialog(): void {
   let dialogRef = this.dialog.open(UsersTableComponent, {
    width: '250px',
    data: {name: this.name, animal: this.animal}
  });
    }*/

  temp_users:any;
  id_current :number ; 
  modalRef :  NgbModalRef ;
  datauser:any;
  detailuser:any;
  user=new User();
  ngOnInit() {
  setInterval(()=>{
    return this.userServise.getAlluserdetails().subscribe(data=>this.temp_users =data.response)
  },1000);
  }

 
 
 
  closeResult:string;
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
  this.userServise.delUserService(this.id_current).subscribe(data => {data=>this.temp_users =data.response; this.ngOnInit();});
  
  this.modalRef.close();
}

//update
openupdate(user,content1) {
  this.datauser=user; 
  console.log("open"+ this.datauser.id_user);

this.modalRef =  this.modalService.open(content1);
this.modalRef.result.then((result) => {

    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    

    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  })
}

update(){
  
  console.log("confirme"+ this.datauser.id_user);
 // console.log("confirme"+ this.datadevice.statut);
  console.log("confirme"+this.user.email);
  console.log("confirme"+this.user.password);
  console.log("confirme"+this.user.numTel);
  console.log("confirme"+this.user.adresse);
  
  this.userServise.UpdateUser(this.user.email,this.user.password,this.user.numTel,this.user.adresse,this.datauser.id_user).subscribe(data => {data=>this.temp_users =data.response; this.ngOnInit();});

  this.modalRef.close();
}


//detailuser
opendetail(user,contentuser) {
  this.detailuser=user; 
  console.log("open"+ this.detailuser.id_user);

this.modalRef =  this.modalService.open(contentuser);
this.modalRef.result.then((result) => {

    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    

    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  })
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







