import { IImageMessage } from './image-message';
export class Message {
    content: string;
    timestamp: Date;
    isBot: boolean;
    avatar: string;
    imageMessage: IImageMessage[];
    isTypingEffect: boolean;

    constructor(
        content: string,
        avatar: string,
        isBot: boolean,
        timestamp?: Date,
        imageMessage?: IImageMessage[],
        isTypingEffect?: boolean
    ) {
        this.content = content;
        this.isBot = isBot;
        this.timestamp = timestamp;
        this.avatar = avatar;
        this.imageMessage = imageMessage;
        this.isTypingEffect = isTypingEffect;
    }
}
