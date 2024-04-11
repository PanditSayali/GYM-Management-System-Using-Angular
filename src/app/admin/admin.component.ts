import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { GYMServiceService } from '../gym-service.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterLink,RouterOutlet,NgFor],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  users: any = [];
  contacts: any=[];

  constructor(private serviceClass: GYMServiceService, private http :HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.getusers();
    this.contacts();
  }

  getusers() {
    this.serviceClass.getRegisterFromService().subscribe((res) => {
      this.users = res;
    });
  }
  
  deleteUsers(id: number) {
    this.serviceClass.deleteRegisterFromService(id).subscribe(() => {
      console.log(id);
      this.getusers();
    });
  }

  goToEditUser(id: number): void {
    this.router.navigate(['/edit-user', id]);
  }


  getcontacts() {
    this.serviceClass.getConatctFromService().subscribe((res) => {
      this.contacts = res;
    });
  }

}
