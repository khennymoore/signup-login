import { UserModel } from './../model/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }

  addUser(user: UserModel) {
    // let users = []
    localStorage.setItem('User', JSON.stringify(user))
    alert("signup Successfull");
    
  }
}
