import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/internal/Observable';
import { Router } from "@angular/router";
//
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//
export class LoginComponent implements OnInit {
  frmLogin : FormGroup;
  user$!: Observable<any>;
  constructor(private http:HttpClient, private router:Router) { 
    this.frmLogin = this.createFormGroup();
  };

  createFormGroup(){
    return new FormGroup({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('', [Validators.required])
    })
  };

  ngOnInit(): void {
  };

  onSubmit():void {
    let currentUser = this.frmLogin.value.username;
    let currentPassword = this.frmLogin.value.password;
    this.user$ = this.http.get(
      'http://localhost:3000/employees',
      {
        params :{username:currentUser}
      }
    );
    this.user$.subscribe(data=>{
      if(currentUser == data[0].username && currentPassword == data[0].password){
        //console.log("User is valid");
        localStorage.setItem('validuser', currentUser);
        this.router.navigateByUrl('/home');
      } else {
        console.log("Invalid User!");
      }
    });
  }

};
