import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Role} from "../role";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  phoneValidatorPattern = new RegExp(/\+420\s\d{3}\s\d{3}\s\d{3}/);
  users: User[] = [];
  addUserForm: FormGroup = new FormGroup({
    userId: new FormControl(0, Validators.required),
    userName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    birthDate: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern(this.phoneValidatorPattern)]),
    role: new FormControl(Role.USER, Validators.required)
  });

  constructor(private userService: UserService) {
  }


  addUser() {
    // if (this.addUserForm.errors!) {
      var userId = this.addUserForm.value.userId;
      var userName = this.addUserForm.value.userName;
      var email = this.addUserForm.value.email;
      var birthDate = this.addUserForm.value.birthDate;
      var phoneNumber = this.addUserForm.value.phoneNumber;
      var role = this.addUserForm.value.role;

      let user = new User(userId, userName, email, birthDate, phoneNumber, role);
      this.userService.addUser(user);
      this.users = this.userService.getUsers();
    // } else {
    //   window.alert("Bad form format" + this.addUserForm.errors);
    // }
  }

  ngOnInit(): void {
  }

  get phoneNumber () {
    return this.addUserForm.get('phoneNumber');
  }

}
