import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {

    onMessageReceive: EventEmitter<boolean>;

    constructor() {
        this.onMessageReceive = new EventEmitter();
    }

}
