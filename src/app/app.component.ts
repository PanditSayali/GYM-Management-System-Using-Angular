import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {AdminComponent} from './admin/admin.component';
// import{ EditUserComponent} from './edit-user/edit-user.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DetailsComponent,NavbarComponent,ContactComponent,LoginComponent,RegisterComponent,RouterOutlet,RouterLink,AdminComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GYM-ManagementSystem';
}
