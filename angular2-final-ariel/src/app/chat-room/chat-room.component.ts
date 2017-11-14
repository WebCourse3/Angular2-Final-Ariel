import { ChatService } from '../services/chat.service';
import { ChatRoomsService } from '../services/chat-rooms.service';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ChatRoom } from './chat-room';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatRoomComponent implements OnInit {

  public chatRoom: ChatRoom;
  public connection;
  public messages = [];
  public message;

  constructor(private route: ActivatedRoute, private chatRoomService: ChatRoomsService, private chatService: ChatService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chatRoom = new ChatRoom();
      this.chatRoom.id = +params['id'];
      this.chatRoom.name = this.chatRoomService.getRoomById(+params['id']).name;
    });

    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
  }
}
