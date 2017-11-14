import { Injectable } from '@angular/core';
import { ChatRoom } from '../chat-room/chat-room';

@Injectable()
export class ChatRoomsService {
    constructor() { }

    private rooms: ChatRoom[] = [{
        id: 1,
        name: 'main'
    }, {
        id: 2,
        name: 'secondary'
    }];

    getRooms(): ChatRoom[] {
        return this.rooms;
    }

    getRoomById(id: number): ChatRoom {
        return this.rooms.filter(room => room.id === id)[0];
    }
}
