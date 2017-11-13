import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizationService {
    constructor() { }

    getPermissions(username: string) {
        if (username === 'admin') {
            return {
                rooms:
                    [
                        { name: 'main', permission: 'all' },
                    ]
            };
        }
    }
}
