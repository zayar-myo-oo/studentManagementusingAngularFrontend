import { Student } from './../BackEndmodel/student';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiUrl="http://localhost:8080/api/";
  /*
  localhost:8080/api/students -GET
  localhost:8080/api/students -POST
  localhost:8080/api/students -PUT
  localhost:8080/students/delete/{id} -DELETE
  localhost:8080/stusearch -GET
  localhost:8080/students/max -GET
  */

 
  constructor(private http:HttpClient) { }

  public getStudentList():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.apiUrl}students`);
  }
  public addStudent(stu:Student):Observable<Student[]>{
    return this.http.post<Student[]>(`${this.apiUrl}students`,stu);
  }
  public updateStudent(stu:Student):Observable<Student[]>{
    return this.http.put<Student[]>(`${this.apiUrl}students`,stu);
  }
  public deleteStu(userId:any):Observable<void>{
     return this.http.delete<void>(`${this.apiUrl}students/delete/${userId}`);      
    }
    public getMaxId():Observable<number>{
      return this.http.get<number>(`${this.apiUrl}students/max`);
    }
    public getById(id:any):Observable<Student>{
      return this.http.get<Student>(`${this.apiUrl}students/${id}`);
    }

    public search(id:any, name:any, course:any): Observable<Student[]>{

      // if(id == '' || id == null){
      //   return this.Http.get<Student[]>(`${this.apiUrl}/ssearch/0/${name}/${course}`);
      // }
      // if( name == null || name == ''){
      //   return this.Http.get<Student[]>(`${this.apiUrl}/ssearch/${id}/null/${course}`);
      // }
      // if(course == null || course == '' ){
      //   return this.Http.get<Student[]>(`${this.apiUrl}/ssearch/${id}/${name}/${course}`);
      // }
      // return this.Http.get<Student[]>(`${this.apiUrl}/ssearch/${id}/${name}/${course}`);
  
      if(id == '' || id == null){
        id = 0;
      }
      if(name == '' || name == null){
        name = null;
      }
      if(course == '' || course == null){
        course = null;
      }
  
      return this.http.get<Student[]>(`${this.apiUrl}stusearch/${id}/${name}/${course}`);
    }
    public reportStu(format:String):Observable<String>{
      return this.http.get<String>( `${this.apiUrl}students/report/${format}`); 
        }

  

}
