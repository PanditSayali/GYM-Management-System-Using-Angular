import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GYMServiceService } from '../gym-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule, NgFor],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactForm!: FormGroup;
  contact: any= [];


  constructor(
    private serviceClass: GYMServiceService,
    private fb:FormBuilder,
    private http :HttpClient)
    {

   this.getcontact();
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      email:[null,[Validators.required,Validators.email]],
      name: [null, [Validators.required ,Validators.name]],
      address: [null, [Validators.required, Validators.toString]],
      message: [null, [Validators.required]]
    });}

    postcontactForm() {
      this.serviceClass
        .postContactFromService(this.contactForm.value)
        .subscribe((res) => {
          console.log(res);
        });
    }

    getcontact() {
    this.serviceClass.getConatctFromService().subscribe((res) => {
      this.contact = res;
    });
  }
   
  
}
