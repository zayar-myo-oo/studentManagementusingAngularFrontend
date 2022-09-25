import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from './../../../BackEndmodel/user';
import { LoginInOutService } from './../../../services/login-in-out.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  LoginUser:any;
  LoginId:any;
  userId:any;
  updateId:any;
  user!:User;
  today: number = Date.now();
  passwordError!: String;

  constructor(private router:Router,private logInService:LoginInOutService,private route: ActivatedRoute,private userService:UserService
    ,private userLogin:LoginInOutService,private fb:FormBuilder) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("isLogin")=="LoginComplete"){
      console.log(this.LoginUser)
      this.LoginUser=sessionStorage.getItem("LoginUserName")
      console.log(this.LoginUser)
      this.LoginId=sessionStorage.getItem("LoginUserId")
      this.getPathValue()
    }else{
      this.router.navigate(['user-login'])
    }
    
  }

  

  updateUserForm=this.fb.group({
    userName:['',Validators.required],
    userEmail:['',Validators.required],
    userPassword:['',Validators.required],
    userConfirmPassword:['',Validators.required],
    userRole:['',Validators.required]
  }) 

  get userName(){
    return this.updateUserForm.get('userName');
  }
  get userEmail(){
    return this.updateUserForm.get('userEmail');
  }
  get userPassword(){
    return this.updateUserForm.get('userPassword');
  }
  get userConfirmPassword(){
    return this.updateUserForm.get('userConfirmPassword');
  }
  get userRole(){
    return this.updateUserForm.get('userRole');
  }
  


public getPathValue(){
  this.userId = this.route.snapshot.paramMap.get("id");
  this.userLogin.LoginUser(this.userId).subscribe(
    (data)=>{
      this.user=new User(data.id,data.name,data.email,data.password,data.role)
      this.updateId=data.id;
      this.updateUserForm.patchValue({
        userName:data.name,
    userEmail:data.email,
    userPassword:data.password,
    userConfirmPassword:data.password,
    userRole:data.role
      })
    }
  )
}

onSubmit(form: FormGroup) {
  console.log(form.value);
  // let userName=form.value.userName;
  let userId=this.updateId;
  // let userEmail=form.value.userEmail;
  let password=form.value.userPassword;
  let userConfirmPassword=form.value.userConfirmPassword;
  // let role=form.value.userRole;
if(password!=userConfirmPassword){
  this.passwordError="Password and ConfirmPassword does not match"
  this.router.navigate(['updateUser',userId]);
}
  this.userService.updateUser(form.value).subscribe(
    (res)=>{
    this.router.navigate(['userList']);
    }
  )
}





goToList(){
  this.router.navigate(["userList"])
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
