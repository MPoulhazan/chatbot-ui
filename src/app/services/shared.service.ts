import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SharedService {
    onMessageReceive: EventEmitter<boolean>;
    isDarkMode = false;
    isSpeedAnswer = true;
    isSoundActivated = true;
    newAvatar$ = new BehaviorSubject<boolean>(true);
    open$ = new BehaviorSubject<boolean>(false);

    static readonly AVATAR_KEY = 'avatar';

    constructor() {
        this.onMessageReceive = new EventEmitter();
        this.isDarkMode = this.getParam('dark') === 'true';
        this.isSpeedAnswer =
            !this.getParam('speed') || this.getParam('speed') === 'true';
        this.isSoundActivated =
            !this.getParam('sound') || this.getParam('sound') === 'true';
    }

    saveParams(key: string, value: string | boolean): void {
        localStorage.setItem(key, value.toString());
    }

    getParam(key: string): string {
        return localStorage.getItem(key);
    }
}
