import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {
    constructor() { }

    login(username: string, password: string) {
        if (username === 'admin' && password === 'admin') {
            console.log('Authenticate admin successfully');
            localStorage.setItem('currentUser', username);
        }
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
