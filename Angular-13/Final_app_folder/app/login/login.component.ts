import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router } from "@angular/router";
import { AuthService } from "./../auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  loginStatus$!:Observable<boolean>;
  constructor(private http:HttpClient, private router:Router, private auth:AuthService) {
    this.frmLogin = this.createFormGroup();
  }
  //
  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
   }
//
  onSubmit(): void {
    this.loginStatus$ = this.auth.login(this.frmLogin.value);
    this.loginStatus$.subscribe(status => {
      if (!status){
        this.router.navigateByUrl('/login');
      } else {
        this.router.navigateByUrl('/home');
      }
    });
  }
//
  ngOnInit(): void {
  }

}

