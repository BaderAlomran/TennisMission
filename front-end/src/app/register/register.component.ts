import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import appconfig from '../appconfig/appconfig';

declare var QB;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  CREDENTIALS = {
  appId: 57275,
  authKey: '47tNHVj6XfjnMyN',
  authSecret: 'thzjpnVSfnWe79k'
}
  token;
  Players:any[];
  selectedPlayer;
  name:string;
  email:string;
  password:string;
  city:string;

  constructor(private http: Http){
    this.Players= [
      {
        
        key:'Tennis Player',
        value:'TENNIS_PLAYER'
      },
      {
        key:'Tennis Coach',
        value:'TENNIS_COACH'
      }
    ];
    this.selectedPlayer = this.Players[1];
  }

  ngOnInit() {
  }
  onChange(Player) {
    debugger;
   this.selectedPlayer = Player;
  }

  onSubmit(){
    let link = appconfig.hosturl+'/registration';
    debugger;
    let body ={
      username:this.name,
      email:this.email,
      password:this.password,
      selection:this.selectedPlayer ,
      city:this.city
    }
    this.http.post(link , body).subscribe((res)=>{
      let abc = this;
        this.email =this.password= this.name=this.city =null;
       this.selectedPlayer = this.Players[1];
      QB.init(this.CREDENTIALS.appId, this.CREDENTIALS.authKey, this.CREDENTIALS.authSecret);
      QB.createSession(function(err, result) {
                QB.init(result.token, abc.CREDENTIALS.appId);
                if(err)
            console.log(err);
            else{
              var params = { 'login': body.email, 'password': body.password};
           QB.users.create(params, function(err, user){
               console.log(user);
            if(err)
                console.log(err);
            });
            }
        })
    },(err)=>{
      console.log(err);
     this.email =this.password= this.name=this.city =null;
       this.selectedPlayer = this.Players[1];    
    });
  }

}

