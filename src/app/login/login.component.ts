import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { GYMServiceService } from '../gym-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  login: any = [];
  loginform!: FormGroup;

  constructor(
    private serviceClass: GYMServiceService,
    private formbuilder: FormBuilder,
  ) {
    // this.getLoginForm();

  }

  //var loginButton = <HTMLInputElement>document.getElementById('login');


  ngOnInit() {
    this.loginform = this.formbuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }

  postLoginform() {
    
    this.serviceClass.postLoginFormService(this.loginform.value)
      .subscribe((res) => {
        console.log(res);
      });
  }
  // getLoginForm(){
  //   this.serviceClass.getLoginFormService().subscribe((res) => {
  //     this.login = res;
  //   });
  // }
  // deletelogin(){
  //   this.serviceClass.deleteLoginFormService(id).subscribe(()=>{
  //     console.log(id);

  //   });
  // }

  // clickButton() {
  //   alert("Rset Your PassWord");
  // }
}
