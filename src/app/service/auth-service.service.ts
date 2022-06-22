import { Injectable } from '@angular/core';
import { find } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  authenticateUser(data: any) {
    let userArray = []
    if (localStorage.getItem('User')) {
      userArray = JSON.parse(localStorage.getItem('User'))
      
    }
    return userArray.find(u => u.email === data.email && u.password === data.password)
      
    }
    
  }

