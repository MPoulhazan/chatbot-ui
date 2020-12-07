import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {

    onMessageReceive: EventEmitter<boolean>;
    isLoadingMessage: boolean;

    constructor() {
        this.onMessageReceive = new EventEmitter();
        this.isLoadingMessage = false;
    }

}
