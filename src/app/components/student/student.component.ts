import { Student } from './../../BackEndmodel/student';
import { CourseService } from './../../services/course.service';
import { Course } from './../../BackEndmodel/course';
import { NgForm } from '@angular/forms';
import { StudentService } from './../../services/student.service';
import { LoginInOutService } from './../../services/login-in-out.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  stucourses!: Course[];
  getCourses!:Course[];
  // postCourses!:Course[];
  

  // stu=new Student();
  StuMaxId!:any;
  LoginUser:any;
  LoginId:any;
  stuCourse!:any;
  today: number = Date.now();
  constructor(private router:Router,private logInService:LoginInOutService,private stuService:StudentService,private couService:CourseService) { }
  ngOnInit(): void {
    if(sessionStorage.getItem("isLogin")=="LoginComplete"){
      console.log(this.LoginUser)
      this.LoginUser=sessionStorage.getItem("LoginUserName")
      console.log(this.LoginUser)
      this.LoginId=sessionStorage.getItem("LoginUserId")
      this.getMaxId();
      this.getAllCourse();
    }else{
      this.router.navigate(['user-login'])
    }
    
  }
onchange(){
  // this.stuCourse=this.stucourses.filter(x=>x.isselected==true).map(x=>x.cid).join(",").toString();
  // this.stuCourse=this.stucourses.filter(x=>x.isselected==true).map(x=>x.name).join(",").toString();
  // console.log(this.stucourses);
  this.getCourses=this.stucourses.filter(x=>x.isselected==true);
  
}
OnSubmit(s:NgForm){
  let id=s.value.id;
  let name=s.value.name;
  let dob=s.value.dob;
  let gender=s.value.gender;
  let phone=s.value.phone;
  let education=s.value.education;
  // this.postCourses=this.getCourses;
  const stu=new Student(id,name,dob,gender,phone,education,this.getCourses);
  console.log(stu)
  this.stuService.addStudent(stu).subscribe(
    (res)=>{
      // window.location.reload();
      this.router.navigate(['createStu']);
      this.getMaxId();
    }
  )

  
  
}



getMaxId(){
  this.stuService.getMaxId().subscribe(
    (res)=>{
      console.log(res);
        this.StuMaxId=res;
    }
  )
  }
getAllCourse(){
  this.couService.getCourseList().subscribe(
    (res)=>{
      this.stucourses=res;
    
    }
  )
}

getCourse(c:any){
  
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
