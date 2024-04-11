import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GYMServiceService } from '../gym-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId!: number;
  users!: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private serviceClass: GYMServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.getUserById(this.userId);
  }

  getUserById(userId: number): void {
    this.serviceClass.getRegisterFromService().subscribe((res: any) => {
        
    })
  }
}