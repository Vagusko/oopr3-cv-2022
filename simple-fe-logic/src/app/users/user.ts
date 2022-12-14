import {Role} from "./role";

export class User {
  userId: number;
  userName: string;
  email: string;
  birthDate: string;
  phoneNumber: string;
  role: Role;

  constructor(userId: number, userName: string, email: string, birthDate: string, phoneNumber: string, role: Role) {
    this.userId = userId;
    this.userName = userName;
    this.email = email;
    this.birthDate = birthDate;
    this.phoneNumber = phoneNumber;
    this.role = role;
  }
}
