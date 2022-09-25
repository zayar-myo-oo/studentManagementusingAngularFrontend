import { Course } from './course';

export class Student{
        id?: number
        name?: string
        dob?: string
        gender?: string
        phone?: string
        education?: string
        course?: string
        courseres?: Course[]
        constructor(id?: number,name?: string,dob?: string,gender?: string,phone?: string,education?: string,courses?: Course[]){
                this.id=id;
                this.name=name;
                this.dob=dob;
                this.gender=gender;
                this.phone=phone;
                this.education=education;
                this.courseres=courses;
        }
        

}