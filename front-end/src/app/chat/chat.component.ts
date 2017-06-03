import { Component, OnInit ,ViewChild } from '@angular/core';
import * as javascriptUtils from '../../chat/js/connection';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
   QBUser1 = {
        id: 26838824,
        name : 'emporio',
        login : String,
        pass : String
    }
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    debugger;
    this.QBUser1.login= JSON.parse(localStorage.getItem('chat')).email;
    this.QBUser1.pass=JSON.parse(localStorage.getItem('chat')).password;
    javascriptUtils.connectToChat(this.QBUser1);
  }

}
