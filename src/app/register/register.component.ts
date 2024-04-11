import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GYMServiceService } from '../gym-service.service';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule,NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  RegisterForm!: FormGroup;
  users: any = [];
  
  constructor(
    private serviceClass: GYMServiceService,
    private fb:FormBuilder,
    private http :HttpClient)
    {

   this.getusers();
  }

  ngOnInit() {
    this.RegisterForm = this.fb.group({
      name: [null, Validators.required ,Validators.name],
      email:[null,Validators.required,Validators.email],
      password: [null, Validators.required],
      contact: [null, Validators.required],
      gender: [null, Validators.required],
      age: [null, Validators.required],
      membership: [null, Validators.required],
      doj:[null, Validators.required],
      payment:[null, Validators.required]
    });
     this.getusers();
  }

    postRegisterform() {
      this.serviceClass
        .postRegisterFromService(this.RegisterForm.value)
        .subscribe((res) => {
          console.log(res);
          this.getusers();
        });
    }
    
    getusers(){
      this.serviceClass.getRegisterFromService().subscribe((res) => {
        this.users= res;
      });
    }




  

  // clickButton()
  // {
  //   alert("Submitted");
  // }

}
