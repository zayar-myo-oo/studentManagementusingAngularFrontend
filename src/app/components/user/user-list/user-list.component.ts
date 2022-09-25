import { NgForm } from '@angular/forms';
import { LoginInOutService } from './../../../services/login-in-out.service';
import { User } from './../../../BackEndmodel/user';
import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  searchText ='';
  user:User[]=[]
  LoginUser:any;
  LoginId:any;
  today: number = Date.now();
  constructor(private router:Router,private logInService:LoginInOutService,private userService:UserService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("isLogin")=="LoginComplete"){
      console.log("value is "+this.LoginUser)
      this.LoginUser=sessionStorage.getItem("LoginUserName")
      console.log("value is "+this.LoginUser)
      this.LoginId=sessionStorage.getItem("LoginUserId")
      console.log("Value is "+this.LoginId)
      this.getUsers();
      // this.getFakeUsers();
    }else{
      this.router.navigate(['user-login'])
    }
    
  }

// UpdateUserMethod
public SearchUser(user:NgForm){
  let id=user.value.id
  let name=user.value.name
  
    this.userService.UserSearch(name,id).subscribe(
      (res)=>{
        console.log(res)
        this.user=res;
      }
    );

  



}

// AddUserMethod

public AddUser(){
  this.router.navigate(['createUser']);
}


// UpdateUserMethod
public UpdateUser(id:number){
  console.log(id)
  this.router.navigate(['updateUser',id]);
}

public DeleteUser(id:any,name:any){

    this.userService.deleteUser(id).subscribe(
      ()=>this.getUsers()
    );
  
  // this.router.navigate(['welcome-menu']);
}

public refresh(){
  this.getUsers();
}


// Log Out User
public LoginOutUser():void{
 this.logInService.LogOutUser() 
}

getReport(format:String){
  console.log(format);
  this.userService.reportUser(format).subscribe(
    (res)=>{
      alert(res);
    }
  )
}

// Get UserMethod
  private getUsers(){
this.userService.getUserList().subscribe(
  data=>{
    this.user=data;
  }
)
  }


  // Fake Api Method
  // private getFakeUsers(){
  //   this.userService.getFakeList().subscribe(
  //     data=>{
  //       console.log("User data is here=>"+data)
  //       this.user=data;
  //     }
  //   )
  //     }
    

// Sort Method
  key='id';
  reverse:boolean=false;
sort(key: any){
  this.key=key;
  this.reverse =!this.reverse;
}  


public dropdownLink(){
  var dropdown= document.querySelector(".dropdown-btn");
  var i;
  dropdown?.classList.toggle("active");
  dropdown?.nextElementSibling?.classList.toggle("d-block")
  }

}
