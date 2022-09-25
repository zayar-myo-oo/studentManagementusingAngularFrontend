import { Router } from '@angular/router';
import { User } from './../BackEndmodel/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginInOutService {
/*
localhost:8080/api/login/{id}
*/
private apiUrl="http://localhost:8080/api/";

  constructor(private http:HttpClient,private router:Router) { }

  public LoginUser(id:number):Observable<User>{
    return this.http.get<User>(`${this.apiUrl}login/${id}`);
  }



  
  public LogOutUser():void{
    // localStorage.removeItem('isLogin');
    sessionStorage.clear();
    this.router.navigate(["user-login"])
    // localStorage.setItem("isLoginOut", "LoginOutComplete");
  }
  
}
