import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class SharedService {
  onMessageReceive: EventEmitter<boolean>;
  isSpeedAnswer = true;
  isSoundActivated = true;

  constructor() {
    this.onMessageReceive = new EventEmitter();
    this.isSpeedAnswer =
      !this.getParam("speed") || this.getParam("speed") === "true";
    this.isSoundActivated =
      !this.getParam("sound") || this.getParam("sound") === "true";
  }

  saveParams(key: string, value: string | boolean): void {
    localStorage.setItem(key, value.toString());
  }

  getParam(key: string): string {
    return localStorage.getItem(key);
  }
}
