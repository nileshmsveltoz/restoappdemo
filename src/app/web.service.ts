import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { FileUploader } from 'ng2-file-upload';

@Injectable()
export class WebService {
  NAME_KEY = 'firstname';
  TOKEN_KEY = 'token';
  USER_ROLE = "userrole";
  loginvalid = "loginvalid";
yield
  // base_url = 'http://localhost:8088/api/';
  base_url = 'https://restodemoapi.herokuapp.com/api/';

 //public uploader: FileUploader = new FileUploader({ url: 'http://localhost:8088/upload' });
  public uploader: FileUploader = new FileUploader({ url: 'https://restodemoapi.herokuapp.com/upload' });

  constructor(private http: Http, private router: Router) { }

  newregister(firstname: string, lastname: string, mobileno: string, email: string, password: string) {
    let data = new URLSearchParams();
    //var url = this.base_url + 'signup';
    data.append('firstname', firstname);
    data.append('lastname', lastname);
    data.append('mobileno', mobileno);
    data.append('email', email);
    data.append('password', password);
    console.log(data);
    this.http.post(this.base_url + 'auth/' + 'register', data).subscribe(res => res.json()); {
    }
  }
  bindprofilelist() {
    debugger;
    var url = this.base_url + 'profile-list';
    var headers = new Headers({ 'Authorization': localStorage.getItem('token') });
    var options = new RequestOptions({ headers: headers });
    console.log("in get profile");
    return this.http.get(url, options).map(res => res.json());

  }

  get UserRole() {
    var user = localStorage.getItem(this.USER_ROLE);
    if (user === "Admin") {
      return true;
    }
    else {
      return false;
    }
    // return !!localStorage.getItem(this.USER_ROLE);
  }

  Login(email: string, password: string) {
    localStorage.setItem(this.loginvalid, "false");
    let data = new URLSearchParams();
    data.append('email', email);
    data.append('password', password);
    console.log(data);
    this.http.post(this.base_url + 'auth/login', data).subscribe(res => {
      this.authenticate(res);
    })

  }
  authenticate(res) {
    localStorage.setItem(this.loginvalid, "true");
    var authResponse = res.json();
    if (!authResponse.token) {
      return;
    }

    localStorage.setItem(this.TOKEN_KEY, authResponse.token)
    localStorage.setItem(this.NAME_KEY, authResponse.user.firstname)
    localStorage.setItem(this.USER_ROLE, authResponse.user.role)

    this.router.navigate(['/Menu']);
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }
  Addprofile(profileId: string,radio: string, name: string, cost: string, info: string, video, categoryid: string) {
debugger;
    let data = new URLSearchParams();
    data.append('radio', radio); 
    data.append('name', name);
    data.append('cost', cost);
    data.append('info', info);
    data.append('video', video);
    data.append('categoryid', categoryid);



    console.log(data);
    var headers = new Headers({ 'Authorization': localStorage.getItem('token'), 'Content-Type': 'application/x-www-form-urlencoded' });
    var options = new RequestOptions({ headers: headers });
    this.http.post(this.base_url + 'add-profile', data, options).subscribe(res => {
      this.authenticate(res);
    })
  }

  getprofilelist() {
    var url = this.base_url + 'profile-list';
    var headers = new Headers({ 'Authorization': localStorage.getItem('token') });
    var options = new RequestOptions({ headers: headers });
    console.log("in get profile");
    return this.http.get(url, options).map(res => res.json());
  }

  deletemenu(profileId: string) {

    var url = this.base_url + 'profiles/' + profileId
    var headers = new Headers({ 'Authorization': localStorage.getItem('token') });
    var options = new RequestOptions({ headers: headers });
    return this.http.delete(url, options).map(res => res.json());
  }


  updateprofile(profileId: string,radio: string, name: string, cost: string, info: string, video: string, categoryid: string) {

    var url = this.base_url + 'profiles/' + profileId
    console.log(url);
    let data = new URLSearchParams();
     data.append('radio', radio);
    data.append('name', name);
    data.append('cost', cost);
    data.append('info', info);
    data.append('video', video);
    data.append('categoryid', categoryid);


    console.log(data);
    var headers = new Headers({ 'Authorization': localStorage.getItem('token'), 'Content-Type': 'application/x-www-form-urlencoded' });
    var options = new RequestOptions({ headers: headers });

    return this.http.put(url, data, options).map(res => res.json());
  }

  getProfile(profileId: string) {
debugger;
    var url = this.base_url + 'profiles/' + profileId
    var headers = new Headers({ 'Authorization': localStorage.getItem('token') });
    var options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).map(res => res.json());
  }

  getcategorylist(Authorization: string) {
    var url = this.base_url + 'category-list?Authorization=';
    var headers = new Headers({ 'Authorization': Authorization });
    var options = new RequestOptions({ headers: headers });
    let data = new URLSearchParams();
    data.append('Authorization', Authorization);
    return this.http.get(url, options).map(res => res.json());
  }
}


