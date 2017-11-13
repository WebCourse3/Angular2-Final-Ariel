import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ChatRoom } from './chat-room';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatRoomComponent implements OnInit {

  constructor() { }

  @Input() private chatRoom: ChatRoom;

  ngOnInit() {
  }
}
