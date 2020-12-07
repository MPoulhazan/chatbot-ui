import { IImageMessage } from './image-message';
export class Message {
  content: string;
  timestamp: Date;
  isBot: boolean;
  avatar: string;
  imageMessage: IImageMessage[];

  constructor(content: string, avatar: string, isBot: boolean, timestamp?: Date, imageMessage?: IImageMessage[]) {
    this.content = content;
    this.isBot = isBot;
    this.timestamp = timestamp;
    this.avatar = avatar;
    this.imageMessage = imageMessage;
  }
}
