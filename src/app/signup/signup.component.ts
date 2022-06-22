import { UserModel } from './../model/user.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  constructor(private FormBuilder : FormBuilder, 
              private http : HttpClient, 
              private router: Router,
              private userService: UserServiceService
              ) { }
  userSignupForm: FormGroup
  user: UserModel

  ngOnInit(): void {
    this.userSignupForm = new FormGroup({
      fullname: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required, Validators.minLength(11)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }
  signUp() {
    //  this.http.post<any>("",this.signupForm.value)
    //  .subscribe(res =>{
    //     alert("signup Successfull");
    //     this.signupForm.reset();
    //     this.router.navigate(['login']);
    //  },err =>{
    //     alert("Something went wrong")
    //  })
    
    this.userService.addUser(this.userData())
    this.userSignupForm.reset();
    this.router.navigate(['']);

    
  }


  userData(): UserModel {
    return this.user = {
      fullname: this.userSignupForm.get('fullname').value,
      phone: this.userSignupForm.get('phone').value,
      email: this.userSignupForm.get('email').value,
      password: this.userSignupForm.get('password').value,
    }
  }

}
