import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {UserService} from "../user.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Role} from "../role";
import {Product} from "../product";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  addUserForm: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.addUserForm = this.formBuilder.group({
      userId: 0,
      userName: "",
      email: "",
      birthDate: "",
      phoneNumber: "",
      role: Role.USER
    });
  }

  addUser() {
    var userId = this.addUserForm.value.userId;
    var userName = this.addUserForm.value.userName;
    var email = this.addUserForm.value.email;
    var birthDate = this.addUserForm.value.birthDate;
    var phoneNumber = this.addUserForm.value.phoneNumber;
    var role = this.addUserForm.value.role;

    let user = new User(userId, userName, email, birthDate, phoneNumber, role);
    this.userService.addUser(user);
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

}
