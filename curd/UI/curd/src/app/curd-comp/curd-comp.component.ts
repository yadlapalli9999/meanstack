import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-curd-comp',
  templateUrl: './curd-comp.component.html',
  styleUrls: ['./curd-comp.component.css']
})
export class CurdCompComponent implements OnInit {

  title = 'curd';
  constructor(private commonService:CommonService){}

  user:any = {}
  listUser;

  ngOnInit(){
    this.getList()
    // this.addusers()
  }

  addusers(){
    console.log(this.user)
    this.commonService.addUserinfo(this.user).subscribe((res)=>{
      console.log(res)
      this.getList()
    }) 
  }

  getList(){
    this.commonService.getUserInfo().subscribe((res)=>{
        this.listUser = res
        console.log(this.listUser)
    })
  }

  deleteUser(obj){
    this.commonService.deleteUserInfo(obj).subscribe((res)=>{
      console.log(res)
      this.getList()
    })
  }

  editUser(obj){
    this.commonService.editUserInfo(obj).subscribe((res)=>{
      console.log(res)
      this.user = res
    })
  }

  updateUser(){
    this.commonService.updateUserInfo(this.user).subscribe((res)=>{
      console.log(res)
      this.getList()
    })
  }

}
