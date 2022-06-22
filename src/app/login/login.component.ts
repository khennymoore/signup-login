import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthServiceService } from '../service/auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, 
              private http : HttpClient, 
              private router : Router,
              private authService: AuthServiceService
              ) { }

  loginForm: FormGroup;
  myUser: any

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  login() {
  //    this.http.get<any>("")
  //    .subscribe(res =>{
  //     const user = res.find((a:any) =>{
  //       return a.email === this .loginForm.value.email && a.password === this .loginForm.value.password
  //     });
  //     if(user){
  //       alert("Login Success!!");
  //       this.loginForm.reset();
  //       this.router.navigate(['dashboard'])
  //     }else{
  //       alert('User not found!!');
  //     }
  //    },err =>{
  //     alert("Something went wrong!!")
  //    })
  // }

  // console.log(this.loginForm.value);
  // const token = this.authService.authenticateUser(this.loginForm.value);
  // // if (token) {
  //   localStorage.setItem('token', token.email)
  //   alert('Login Successful')
  // } else {
  //   alert('Invalid')
  // }
  

  this.authService.authenticateUser(this.loginForm.value)
  }


}
