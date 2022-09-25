import { HomeComponent } from './components/home/home.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { UpdateStudentComponent } from './components/student/update-student/update-student.component';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'user-login',pathMatch:'full'},
  {path:'user-login',component:LoginFormComponent},
  {path:'welcome-menu',component:HomeComponent},
  {path:'userList',component:UserListComponent},
  {path:'courseList',component:CourseComponent},
  {path:'createUser',component:UserComponent},    
  {path:'stuList',component:StudentListComponent},
  {path:'createStu',component:StudentComponent},
  {path:'updateStu/:id',component:UpdateStudentComponent},
  {path:'updateUser/:id',component:UserUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
