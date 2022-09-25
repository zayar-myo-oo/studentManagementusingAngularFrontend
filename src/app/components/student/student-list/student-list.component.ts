import { NgForm } from '@angular/forms';
import { Course } from './../../../BackEndmodel/course';
import { Student } from './../../../BackEndmodel/student';
import { StudentService } from './../../../services/student.service';
import { LoginInOutService } from './../../../services/login-in-out.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  stuAll:Student[]=[];
  couAll!:Course[];
  LoginUser:any;
  LoginId:any;
  today: number = Date.now();
  constructor(private router:Router,private logInService:LoginInOutService,private stuService: StudentService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("isLogin")=="LoginComplete"){
      
      this.LoginUser=sessionStorage.getItem("LoginUserName")
      
      this.LoginId=sessionStorage.getItem("LoginUserId")
      this.getAllStudent()
    }else{
      this.router.navigate(['user-login'])
    }
    
  }

  public SearchUser(user:NgForm){
    let id=user.value.id;
    let name=user.value.name;
    let course=user.value.course;
      this.stuService.search(id,name,course).subscribe(
        (res)=>{
          
          this.stuAll=res;
          console.log(this.stuAll)
        }
      );
  
      }
      refresh(){
        this.getAllStudent();
      }


      getReport(format:String){
        console.log(format);
        this.stuService.reportStu(format).subscribe(
          (res)=>{
            alert(res);//path
          }
        )
      }

public getAllStudent(){
  this.stuService.getStudentList().subscribe(
    (res)=>{
      
      this.stuAll=res;  
      console.log(this.stuAll)   
      
    }
      )
    }


    GoToUpdate(id?:number){      
      console.log(id)
      this.router.navigate(['updateStu',id]);
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
