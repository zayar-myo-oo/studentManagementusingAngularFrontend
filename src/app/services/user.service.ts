import { User } from './../BackEndmodel/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private apiFakeUrl='../../assets/users.json';
private apiUserUrl="http://localhost:8080/api/";

/*
localhost:8080/api/users -GET
localhost:8080/api/users -POST
localhost:8080/api/users -PUT
localhost:8080/api/usersearch -GET
localhost:8080/api/users/delete/{id} -DELETE
localhost:8080/api/users/max -GET
*/constructor(private http:HttpClient) { }


public getUserList():Observable<User[]>{
  return this.http.get<User[]>(`${this.apiUserUrl}users`);
}

  public getFakeList():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiFakeUrl}`);
  }
  
    public addUser(user:User):Observable<User>{
      console.log("User value is"+user.email+user.id+user.password)
return this.http.post<User>( `${this.apiUserUrl}users`,user);
  }

  public updateUser(user:User):Observable<User>{
    return this.http.put<User>( `${this.apiUserUrl}users`,user);
      }
  public UserPostSearch(user:User):Observable<User[]>{
        return this.http.post<User[]>(`${this.apiUserUrl}usersearch`,user);
      }

      public UserSearch(userName:any,userId:any):Observable<User[]>{
        
         if(userId == '' || userId == null){
          return this.http.get<User[]>(`${this.apiUserUrl}usersearch/0/${userName}`);
        }else if(userName == null || userName == ''){
          return this.http.get<User[]>(`${this.apiUserUrl}usersearch/${userId}/null`);
        }else{
          return this.http.get<User[]>(`${this.apiUserUrl}usersearch/${userId}/${userName}`);
        }
        
      }


    public deleteUser(userId:any):Observable<void>{
      console.log(" Your Id is here"+userId)
      return this.http.delete<void>(`${this.apiUserUrl}users/delete/${userId}`);      
      }

  public maxUser():Observable<number>{
            return this.http.get<number>( `${this.apiUserUrl}users/max`); 
              }

              public reportUser(format:String):Observable<String>{
                return this.http.get<String>( `${this.apiUserUrl}users/report/${format}`); 
                  }

}
