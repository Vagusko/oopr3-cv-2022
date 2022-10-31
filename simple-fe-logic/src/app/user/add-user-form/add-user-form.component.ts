import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Role} from "../role";
import {User} from "../user";
import {UserService} from "../user.service";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.css']
})
export class AddUserFormComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  phoneValidatorPattern = new RegExp(/\+420\s\d{3}\s\d{3}\s\d{3}/);
  addUserForm: FormGroup = new FormGroup({
    userId: new FormControl(0, Validators.required),
    userName: new FormControl("", Validators.required),
    email: new FormControl("", [Validators.required, Validators.email]),
    birthDate: new FormControl("", Validators.required),
    phoneNumber: new FormControl("", [Validators.required, Validators.pattern(this.phoneValidatorPattern)]),
    role: new FormControl(Role.USER, Validators.required)
  });

  ngOnInit(): void {
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
  }

  get phoneNumber() {
    return this.addUserForm.get('phoneNumber');
  }

}
