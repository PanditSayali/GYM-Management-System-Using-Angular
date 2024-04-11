import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import{RegisterComponent} from './register/register.component';
import{AdminComponent} from './admin/admin.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { GYMServiceService } from './gym-service.service';
import { CommonModule } from '@angular/common';

export const routes: Routes = [
    
    {path:'home', component:HomeComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'contact' ,component:ContactComponent},
    {path:'login', component:LoginComponent},
    {path:'details', component:DetailsComponent},
    {path:'register' ,component:RegisterComponent},
    {path:"admin",component:AdminComponent},
    { path: 'edit-user/:id', component: EditUserComponent },
    
];

@NgModule({
  declarations: [
    EditUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EditUserComponent
  ]
})
export class EditUserModule { }




