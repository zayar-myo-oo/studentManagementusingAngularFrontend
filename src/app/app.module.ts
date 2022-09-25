import { LoginInOutService } from './services/login-in-out.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { SearchFilterPipe } from './search-filter.pipe';

import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CourseComponent } from './components/course/course.component';
import { StudentComponent } from './components/student/student.component';
import { UserComponent } from './components/user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http'
import { HomeComponent } from './components/home/home.component';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentListComponent } from './components/student/student-list/student-list.component';
import { UpdateStudentComponent } from './components/student/update-student/update-student.component';
import { pipe } from 'rxjs';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StudentComponent,
    CourseComponent,
    UserListComponent,
    UserUpdateComponent,
    HomeComponent,
    LoginFormComponent,
    StudentListComponent,
    UpdateStudentComponent,
    SearchPipe,

    // SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
