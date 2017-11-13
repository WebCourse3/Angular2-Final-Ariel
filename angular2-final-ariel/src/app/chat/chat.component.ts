import { ChatRoom } from '../chat-room/chat-room';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatRoomsService } from '../services/chat-rooms.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatComponent implements OnInit {

  private chatRooms: ChatRoom[];
  constructor(private chatRoomService: ChatRoomsService) { }

  ngOnInit() {
    this.chatRooms = this.chatRoomService.getRooms();
  }

}
