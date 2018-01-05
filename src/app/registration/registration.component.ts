import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { WebService } from '../web.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [
    { provide: 'ORIGIN_URL', useValue: location.origin },
    WebService
  ]
})
export class RegistrationComponent implements OnInit {
add;
messagefirstname;
messageemail;
messagepassword;
add_registration: boolean = false;
valid=false;
  constructor(private Router: Router, private fb: FormBuilder, private WebService: WebService) { 
    this.add = fb.group({
      firstname: [''],
      lastname: [''],
      mobileno: [''],
      email: [''],
      password: ['']
    })
  
  }

  ngOnInit() {
  }

  newregister(){ 
    
    var firstname = this.add.value.firstname;
    var lastname = this.add.value.lastname;
    var mobileno = this.add.value.mobileno;
    var email = this.add.value.email;
    var password = this.add.value.password;
    this.validate(firstname,lastname,mobileno,email,password);
    
        if (this.valid) 
        {
          this.add_registration = true;
          this.WebService.newregister(firstname, lastname, mobileno, email, password);
          this.Router.navigate(['/login'])
        }
      }
    
      validate(firstname,lastname,mobileno,email,password) 
      {
        if (firstname=="") {
          this.messagefirstname = true;
          this.valid = false;
        }
        else 
        {
          this.messagefirstname = false;
        }
        if (email=="") {
          this.messageemail = true;
          this.valid = false;
        }
        else 
        {
          this.messageemail = false;
        }
        if (password=="") {
          this.messagepassword = true;
          this.valid = false;
        }
        else 
        {
          this.messagepassword = false;
        }
    
        if (firstname != "" && lastname!= "" && mobileno!= "" && email!= "" && password!= "" ) {
          this.valid = true;
        }
      }

    


  cancle()
  {
    this.Router.navigate(['/login'])
  }
}
