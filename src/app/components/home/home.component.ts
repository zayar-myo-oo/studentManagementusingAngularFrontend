import { LoginInOutService } from './../../services/login-in-out.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  LoginUser:any;
  LoginId:any;
  today: number = Date.now();
  constructor(private router:Router,private logInService:LoginInOutService) { }

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




  public dropdownLink(){
  var dropdown= document.querySelector(".dropdown-btn");
  var i;
  dropdown?.classList.toggle("active");
  dropdown?.nextElementSibling?.classList.toggle("d-block")
  }

  

 

}
