import { UserService } from 'src/app/services/user.service';
import { User } from './../../BackEndmodel/user';
import { NgForm } from '@angular/forms';
import { LoginInOutService } from './../../services/login-in-out.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  LoginUser:any;
  LoginId:any;
  user!:User;
  passwordError!: String;
  today: number = Date.now();
  constructor(private router:Router,private logInService:LoginInOutService,private userService:UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("isLogin")=="LoginComplete"){
      console.log(this.LoginUser)
      this.LoginUser=sessionStorage.getItem("LoginUserName")
      console.log(this.LoginUser)
      this.LoginId=sessionStorage.getItem("LoginUserId")
    }else{
      this.router.navigate(['user-login'])
    }
    
  }



public LoginOutUser():void{
 this.logInService.LogOutUser() 
}




onSubmit(userForm:NgForm){
let uPassword=userForm.value.password;
let uConfirm= userForm.value.userconpassword;
if(uPassword ===uConfirm){

  this.userService.addUser(userForm.value).subscribe(
    (res)=>{
      this.router.navigate(['userList']);
    }
    
  )
  console.log("success");
  console.log(userForm.value)
  
}else{
  this.passwordError="Password and ConfirmPassword does not match"
  this.router.navigate(['createUser']);
}

}




  public dropdownLink(){
  var dropdown= document.querySelector(".dropdown-btn");
  var i;
  dropdown?.classList.toggle("active");
  dropdown?.nextElementSibling?.classList.toggle("d-block")
  }

  

 

}
