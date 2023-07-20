import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  frmRegister : FormGroup;
  constructor() { 
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
    console.log(this.frmRegister.value);
    
  }

};
