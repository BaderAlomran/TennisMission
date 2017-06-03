import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router } from "@angular/router";
import appconfig from '../appconfig/appconfig';


@Component({
  selector: 'players',
  templateUrl: './playerlist.componet.html',
  styleUrls: ['./playerlist.component.css']
})

export class PlayerListComponent implements OnInit {

  Player: any[];
  Data:any;
  constructor(private http: Http) {
    this.GetPlayerList();
    this.Data=[];
  }

  ngOnInit() { }
  GetPlayerList(): void {

    this.http.get(appconfig.hosturl + "/players").subscribe((_player:any ) => {
       if(_player.status===200){
          this.Player = JSON.parse(_player._body);
       }
    })
  }

  Details(id){
    this.Data=[];
    let link = appconfig.hosturl + '/players/';
    this.http.get(link+id)
	  .subscribe((res:any) => {
      this.Data=JSON.parse(res._body);
    },(err)=>{
      console.log(err);
    });
  }
}

