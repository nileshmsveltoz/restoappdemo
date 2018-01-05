import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { WebService } from '../web.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [WebService]
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  login;
messageemailpwd;
messageemail;
messagepassword;
loginvalid;

  constructor(private Router: Router,  private fb: FormBuilder, private WebService:WebService) {
    this.login = fb.group({
      email: [''],
      password: [''],
  })
   }

  ngOnInit() {
  }

  Login(){
    var email = this.login.value.email;
    var password = this.login.value.password;

    
    this.validate(email, password);
    this.WebService.Login(email, password);
    this.loginvalid = localStorage.getItem('loginvalid');
    if (this.loginvalid == "false" && email != "" && password != "") {
        this.messageemailpwd = true;
    }

}

validate(email, password) {
    if (email == "") {
        this.messageemail = true;
    }
    else {
        this.messageemail = false;
    }
    if (password == "") {
        this.messagepassword = true;
    }
    else {
        this.messagepassword = false;
    }
}

register() {

    this.Router.navigate(['/register'])
}

cancle(){
  this.Router.navigate(['login'])
}
}
