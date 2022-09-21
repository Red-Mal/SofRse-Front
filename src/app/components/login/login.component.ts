import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginFormGroup!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.loginFormGroup=this.fb.group({
      "username":this.fb.control("",[Validators.required,Validators.email]),
      "password":this.fb.control("",[Validators.required,Validators.min(4)]),
      "remember":this.fb.control("")
    })
  }


}
