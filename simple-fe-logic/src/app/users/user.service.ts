import {Injectable} from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = "https://d1d87f41-67bd-4733-9387-66132bfc3e73.mock.pstmn.io/users/200";
  users: User[] = [];

  constructor(private http: HttpClient) {
  }

  addUser(user: User) {
    // this.users.push(user);
  }
//   [
//     { userId: 1, userName: "pkol", email: "patrik.kolenovsky@gmail.com", birthDate: "30.08.1995", phoneNumber: "+420 123 456 789", role: "admin"},
// { userId: 2, userName: "pkol", email: "patrik.kolenovsky@gmail.com", birthDate: "30.08.1995", phoneNumber: "+420 123 456 789", role: "admin"},
// { userId: 3, userName: "pkol", email: "patrik.kolenovsky@gmail.com", birthDate: "30.08.1995", phoneNumber: "+420 123 456 789", role: "admin"},
// ]

  getUsers() {
    return this.http.get<User[]>(this.apiUrl);
  }
}
