export class Message {
  content: string;
  timestamp: Date;
  isBot: boolean;
  avatar: string;

  constructor(content: string, avatar: string, isBot: boolean, timestamp?: Date) {
    this.content = content;
    this.isBot = isBot;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}
