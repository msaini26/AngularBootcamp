import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
//
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
//
export class RegisterComponent implements OnInit {
  frmRegister : FormGroup;
  constructor(private http:HttpClient) { 
    this.frmRegister = this.createFormGroup();
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
    this.http.post(
      'http://localhost:3000/employees', 
      this.frmRegister.value
    ).subscribe({
      next:data => console.log(data),
      error:err => console.log(err)      
    });    
  }

};
