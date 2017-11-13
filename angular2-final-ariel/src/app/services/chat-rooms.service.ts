import { Injectable } from '@angular/core';
import { ChatRoom } from '../chat-room/chat-room';

@Injectable()
export class ChatRoomsService {
    constructor() { }

    getRooms(): ChatRoom[] {
        return [{
            name: 'main'
        }, {
            name: 'secondary'
        }];
    }
}
