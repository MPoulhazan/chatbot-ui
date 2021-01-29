import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class SharedService {
  onMessageReceive: EventEmitter<boolean>;
  isSpeedAnswer = true;

  constructor() {
    this.onMessageReceive = new EventEmitter();
  }
}
