import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { User } from '../models';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
  ) { }

  userForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    password: [''],
    email: ['']
  });

  onSubmit(userForm: any) {
    const user: User =  userForm.value;
    console.log(user);
    this.http.post('http://localhost:3000/registration', {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email
    }).subscribe(
      (err) => {
        if (err) {console.log(err); }
        console.log('Success');
      });
  }
  ngOnInit() {
  }

}
