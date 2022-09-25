import { Observable } from 'rxjs';
import { Course } from './../BackEndmodel/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUserUrl="http://localhost:8080/api/";
 /*
localhost:8080/courses -GET
localhost:8080/courses -POST
localhost:8080/courses/max -GET
  */

constructor(private http:HttpClient){ }

 public getCourseList():Observable<Course[]>{
  return this.http.get<Course[]>(`${this.apiUserUrl}courses`);
}

  public getMaxId():Observable<number>{
    return this.http.get<number>(`${this.apiUserUrl}courses/max`);
  }
  
    public addCourse(cou:Course):Observable<Course>{      
return this.http.post<Course>(`${this.apiUserUrl}courses`,cou);
  }
}
