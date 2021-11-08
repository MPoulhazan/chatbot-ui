import {
    Component,
    OnInit,
    Input,
    ViewChild,
    ElementRef,
    OnDestroy,
} from '@angular/core';
import { AvatarGenerator } from 'random-avatar-generator';
import { AvatarGeneratorServiceService } from '../../services/avatar-generator-service.service';
import { Message } from '../../models';
import { IImageMessage } from '../../models/image-message';
import { DialogflowService } from '../../services';
import { SharedService } from '../../services/shared.service';
import { Constants } from '../../utils/constants';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.scss'],
})
export class MessageFormComponent implements OnInit, OnDestroy {
    @Input('message')
    message: Message;

    @Input('messages')
    messages: Message[];

    sharedService: SharedService;
    avatarSubscription: Subscription;

    constructor(
        sharedService: SharedService,
        private dialogFlowService: DialogflowService,
        private avatarGeneratorServiceService: AvatarGeneratorServiceService
    ) {
        this.sharedService = sharedService;
    }

    ngOnInit() {
        this.ckekNewAvatar();
    }

    ngOnDestroy() {
        this.avatarSubscription.unsubscribe();
    }

    public sendMessage(): void {
        if (!!this.message.content) {
            this.message.timestamp = new Date();
            this.messages.push(this.message);
            const dentistAvatar =
                this.avatarGeneratorServiceService.getUserAvatar(true);

            this.dialogFlowService.getResponse(this.message.content).subscribe(
                (res: any) => {
                    const images: string[] = res && res.imagesUrl;
                    this.printMessage(
                        res.message,
                        dentistAvatar,
                        res.timestamp,
                        images
                    );
                },
                (err) => {
                    console.log('An error occured', err),
                        this.printMessage(
                            'Je suis actuellement en maintenance sur cette plateforme, mais vous pouvez passer par Messenger pour me poser vos questions https://www.facebook.com/parobotNantes',
                            dentistAvatar,
                            new Date(),
                            null
                        );
                    this.message = new Message(
                        '',
                        this.avatarGeneratorServiceService.userAvatar,
                        false
                    );
                },
                () => {
                    this.message = new Message(
                        '',
                        this.avatarGeneratorServiceService.userAvatar,
                        false
                    );
                }
            );
        }
    }

    private printMessage(
        message: string,
        dentistAvatar: string,
        timestamp: Date,
        imagesUrls: string[]
    ) {
        this.messages.push(
            new Message(
                message,
                dentistAvatar,
                true,
                timestamp,
                imagesUrls,
                !this.sharedService.isSpeedAnswer
            )
        );
        this.sharedService.onMessageReceive.emit(true);
    }

    ckekNewAvatar() {
        this.avatarSubscription = this.sharedService.newAvatar$.subscribe(
            () => {
                if (this.message) {
                    this.message.avatar =
                        this.avatarGeneratorServiceService.userAvatar;
                }
            }
        );
    }
}
