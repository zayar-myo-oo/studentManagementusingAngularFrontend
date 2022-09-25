import { NgForm } from '@angular/forms';
import { Course } from './../../../BackEndmodel/course';
import { CourseService } from './../../../services/course.service';
import { Student } from './../../../BackEndmodel/student';
import { StudentService } from './../../../services/student.service';
import { LoginInOutService } from './../../../services/login-in-out.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  stucourses!: Course[];
  getCourses!:Course[];
  postCourses!:Course[];
  stu=new Student();

  studentName:any;
  studentDate:any;
  StuMaxId:any;
  checkCou:number[]=[];
  
  LoginUser:any;
  LoginId:any;
  updateId:any
  today: number = Date.now();
  constructor(private router:Router,private logInService:LoginInOutService,private stuService:StudentService,private route:ActivatedRoute,private couService:CourseService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("isLogin")=="LoginComplete"){
      console.log(this.LoginUser)
      this.LoginUser=sessionStorage.getItem("LoginUserName")
      console.log(this.LoginUser)
      this.LoginId=sessionStorage.getItem("LoginUserId")
      this.getStudentData();
      this.getAllCourse();
    }else{
      this.router.navigate(['user-login'])
    }
    
  }

  OnSubmit(s:NgForm){
    let id=s.value.id;
    let name=s.value.name;
    let dob=s.value.dob;
    let gender=s.value.gender;
    let phone=s.value.phone;
    let education=s.value.education;
    this.postCourses=this.getCourses;
  
    const stu=new Student(id,name,dob,gender,phone,education,this.postCourses);
    console.log(stu)
    this.stuService.updateStudent(stu).subscribe(
      (res)=>{
        this.router.navigate(['stuList']);
      }
    )
  
    
    
  }
  


getStudentData(){
  this.updateId = this.route.snapshot.paramMap.get("id");
  this.stuService.getById(this.updateId).subscribe(
    (res)=>{
      
     this.stu=res;//courses isseleced:false
     res.courseres?.map((x)=> this.checkCou.push(x.cid));
     console.log("Check Id "+this.checkCou);
    } 
    
  )
}


deleteStudent(id:any){
    this.stuService.deleteStu(id).subscribe(
      ()=>{
        this.router.navigate(['stuList']);
      }
      
    );
    
    
}




onchange(){
  this.getCourses=this.stucourses.filter(x=>x.isselected==true);
}
getAllCourse(){
  this.couService.getCourseList().subscribe(
    (res)=>{

      this.stucourses=res.map(
        (cou)=>{
          for(let i=0;i<this.checkCou.length; i++){
            if(cou.cid == this.checkCou[i]){
             return{...cou,isselected:true}
            }
          }
          return cou;
        }
      );
      

    }
  )
}


/*

data =>{

  this.c=data.map(
    d=>{
        this.stu.courses=?.map(
          da=>{
            if(d.cid==da.cid){
              return{..d,isselect:true}
            }
          }
        )
return d
    }
    
  )
}



*/



getMaxId(){
  this.stuService.getMaxId().subscribe(
    (res)=>{
      console.log(res);
        this.StuMaxId=res;
        
    }
  )
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
