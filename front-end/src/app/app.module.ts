import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocalStorageModule } from 'angular-2-local-storage';
 import { Ng2Notify } from 'ng2-notify/notify';
 import { Ng2NotifyService } from 'ng2-notify/notify';

import { AppComponent } from './app.component';
import { PlayerListComponent } from './playerlist/playerlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DatainputComponent } from './datainput/datainput.component';
import { ChatComponent } from './chat/chat.component';

const appRoutes: Routes = [
  { path: '', component: RegisterComponent },
  { path: 'data', component: DatainputComponent },  
  { path: 'login', component: LoginComponent},
   {path:'players',component:PlayerListComponent},
   {path:'chat',component:ChatComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DatainputComponent,
    PlayerListComponent,
    ChatComponent,
  ],
  imports: [
    LocalStorageModule.withConfig({
            prefix: 'proj',
            storageType: 'localStorage'
        }),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    // Ng2Notify,    
    FormsModule,
    HttpModule
  ],
  // providers: [Ng2NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
