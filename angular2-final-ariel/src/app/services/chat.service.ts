import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';

export class ChatService {
    private url = 'http://localhost:3000';
    private socket;

    sendMessage(message: string) {
        this.socket.emit('add-message', message);
    }

    getMessages() {
        console.log('getting messages');
        const observable = new Observable(observer => {
            this.socket = io(this.url);
            this.socket.on('message', data => {
                console.log('recieved chat message');
                observer.next(data);
            });
            return () => {
                this.socket.disconnect();
            };
        });
        return observable;
    }
}
