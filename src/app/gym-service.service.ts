import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const registerURL = "http://localhost:9090/registration/";
const loginURL = "http://localhost:9090/";
const contactURL="http://localhost:9090/";


@Injectable({
  providedIn: 'root'
})
export class GYMServiceService {
  getContactFromService() {
    throw new Error('Method not implemented.');
  }
  getRegisterByIdFromService: any;
  

  //inject the http client connect with backend
  constructor(private http : HttpClient) { 
    console.log('service running...');
  }

  //metod for Registration
  postRegisterFromService(register:any): Observable<any>{
    return this.http.post(registerURL + 'register',register);
  }

  getRegisterFromService(){
    return this.http.get(registerURL+'registerData');
  }

  deleteRegisterFromService(id:number):Observable<any> {
    console.log(registerURL + 'deleteRecord/' + id);
    
    return this.http.delete(registerURL + 'deleteRecord/' + id);
  }

  updateRegisterFromService(user: any): Observable<any> {  
    return this.http.put(registerURL + 'updateRecord', user);
  }


  
  //method for insertion
  postLoginFormService(login: any): Observable<any> {
    console.log("**************************login"+login);
    return this.http.post(loginURL +'loginPage',login);
  }

 
  getLoginFormService(){

    //return this.http.get(loginURL + 'loginPage',login);

  }

  //method for contacts
  postContactFromService(contact: any): Observable<any> {
    return this.http.post(contactURL + 'contactus',contact);
  }

  getConatctFromService(){
    return this.http.get(contactURL+'contactData');
  }
  
}
