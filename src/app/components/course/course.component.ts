import { Course } from './../../BackEndmodel/course';
import { CourseService } from './../../services/course.service';
import { NgForm } from '@angular/forms';
import { LoginInOutService } from './../../services/login-in-out.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  couName!:any;
  LoginUser:any;
  LoginId:any;
  couError:any;
  couId:any;
  // couCheck:Course[]=[];
  today: number = Date.now();
  constructor(private router:Router,private logInService:LoginInOutService,private cou:CourseService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("isLogin")=="LoginComplete"){
      
      this.LoginUser=sessionStorage.getItem("LoginUserName")
      
      this.LoginId=sessionStorage.getItem("LoginUserId")
      this.getCouId()
    }else{
      this.router.navigate(['user-login'])
    }
    
  }



  getCouId(){
    this.cou.getMaxId().subscribe((res)=>{
      console.log("This is"+res)
        this.couId=res;    
        console.log("This is"+this.couId)
  })
}



  onSubmit(cou:NgForm){
    
       console.log(cou.value)
      this.cou.addCourse(cou.value).subscribe(
        ()=>{              
          console.log(cou.value)
          this.router.navigate(['courseList']);
          this.getCouId()
          this.couName=" "
          this.couError="Course is OK";  
          
          
          setTimeout(()=>{
            this.couError=""
          },1500)
          
        })            
        
  }

      // let couName=cou.value.name;
    // this.cou.getCourseList().subscribe(
    //  (res)=>{let couCheck=res.filter((cou) =>{
    //           if(cou.name==couName){
    //             return cou;
    //           }
    //       })//end couCheck
    //       if(couCheck.length > 1){
    //         this.couError="Course is duplite";this.router.navigate(['courseList']);
    //       }else{
          
    //       }

    //   }//end res
    //   )//end subscribe

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
      














