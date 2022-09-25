import { User } from './../../BackEndmodel/user';
import { Router } from '@angular/router';
import { LoginInOutService } from './../../services/login-in-out.service';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  // registerForm!:FormGroup
  User: any;
  passwordError:any;

  constructor(private service:LoginInOutService,private router:Router) { }

  ngOnInit(): void {
//validations
  this.User={
    id:"",
    password:"123"
  }
  }

  onSubmit(userForm:NgForm){
let uId=userForm.value.userId ;
let uPassword=userForm.value.password;
console.log("uId is"+typeof uId +"uPassword"+uPassword)
    this.service.LoginUser(uId).subscribe(
      (user)=>{
        if(user !=null){
          if(uPassword == user.password){
            alert("SuccessFully Login"+user.name);
            sessionStorage.setItem("isLogin", "LoginComplete");
            sessionStorage.setItem("LoginUserName", user.name);
            sessionStorage.setItem("LoginUserId", user.id.toString());
            this.router.navigate(['welcome-menu']);
        }else if(uPassword !=user.password){
          this.passwordError="User Password does not match";
      }
      }else{
        this.passwordError="User Id Not Found";
      }
      },
      (error:HttpErrorResponse)=>{
                 alert(error.message + "Login Fail Something wrong");
        }
    )


   
  }


}
