import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { Message } from '../../models';
import { Constants } from '../../utils/constants';
import { AvatarGeneratorServiceService } from '../../services/avatar-generator-service.service';

@Component({
    selector: 'app-message-item',
    templateUrl: './message-item.component.html',
    styleUrls: ['./message-item.component.scss'],
})
export class MessageItemComponent implements OnInit, OnDestroy {
    @Input('message')
    message: Message;

    hasImageInMsg = false;
    name = '';
    isShowImage = true;
    sharedService: SharedService;
    private audio = new Audio();

    constructor(
        sharedService: SharedService,
        private avatarGeneratorServiceService: AvatarGeneratorServiceService
    ) {
        this.sharedService = sharedService;
    }

    ngOnInit() {
        this.name = this.getName();
        this.audio.src = '../../assets/sounds/typing.mp3';
        this.audio.load();

        if (
            this.message.isTypingEffect &&
            this.sharedService.isSoundActivated
        ) {
            this.audio.play();
        }

        this.hasImageInMsg =
            this.message.imageMessage &&
            this.message.imageMessage.length > 0 &&
            this.message.imageMessage.filter((img) => img.imageUrl).length > 0;

        this.showImage();
    }

    ngOnDestroy() {
        if (this.audio) this.audio.pause();
        this.audio = null;
    }

    onComplete() {
        if (this.audio) this.audio.pause();
        this.audio = null;

        this.isShowImage = true;
    }

    showImage() {
        this.isShowImage = this.sharedService.isSpeedAnswer;
    }

    onImgError(event: any) {
        console.error('Unable to load avatar, set default');
        event.target.src = Constants.AVATAR_USER_PATH;
    }

    generateNewUserAvatar(event: any, isBot: boolean) {
        if (!isBot) {
            this.avatarGeneratorServiceService.generateNewUserAvatar();
            event.target.src = this.avatarGeneratorServiceService.userAvatar;
        }
    }

    private getName(): string {
        if (this.message.isBot) {
            return 'Parobot';
        }
        return 'Vous';
    }
}
