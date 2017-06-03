import { Component } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  abc;
  constructor(private http: Http,private localStorageService: LocalStorageService,private route: Router){
    this.route.events.subscribe(event =>{
    this.abc = localStorage.getItem('key');
    });
  }

  SingOff():void {
   localStorage.clear();
   this.route.navigate(['/'], { fragment: 'top' });
  }
}
