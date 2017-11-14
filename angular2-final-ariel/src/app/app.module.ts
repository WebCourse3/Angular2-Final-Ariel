import { AuthenticationService } from './services/authentication.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthorizationService } from './services/authorization.service';
import { ChatRoomsService } from './services/chat-rooms.service';
import { ChatComponent } from './chat/chat.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'room/:id', component: ChatRoomComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    ChatRoomComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [ AuthenticationService, AuthorizationService, ChatRoomsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
