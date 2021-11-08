import { IImageMessage } from './image-message';
export class Message {
    content: string;
    timestamp: Date;
    isBot: boolean;
    avatar: string;
    imagesUrls: string[];
    isTypingEffect: boolean;

    constructor(
        content: string,
        avatar: string,
        isBot: boolean,
        timestamp?: Date,
        imagesUrls?: string[],
        isTypingEffect?: boolean
    ) {
        this.content = content;
        this.isBot = isBot;
        this.timestamp = timestamp;
        this.avatar = avatar;
        this.imagesUrls = imagesUrls;
        this.isTypingEffect = isTypingEffect;
    }
}
