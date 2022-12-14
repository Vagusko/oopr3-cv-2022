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

  users: User[] = [];
  displayedColumns: string[] = ['userId', 'userName', 'email', 'birthDate', 'phoneNumber', 'role'];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.users = [...this.userService.getUsers()];
  }



}
