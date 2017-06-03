import { Component, OnInit} from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Router} from "@angular/router";
import appconfig from '../appconfig/appconfig';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;
  password;
  constructor(private http: Http ,private router: Router) { 
  }

  ngOnInit() {
  }
  
  onSubmit(){
    let link =appconfig.hosturl+'/login';
    let body ={
      email:this.email,
      password:this.password,
    }
    let abc = this;
    this.http.post(link , body).subscribe((res:any)=>{
      if(res.status==200){
        localStorage.setItem('key',JSON.parse(res._body)[0]._id);
        localStorage.setItem('chat',JSON.stringify(body));
        abc.router.navigate(['/data'], { fragment: 'top' });
      }
    },(err)=>{
      console.log(err);
    });
  }

}


