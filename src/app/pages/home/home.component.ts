import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AvatarGeneratorServiceService } from '../../services/avatar-generator-service.service';
import { Message } from '../../models';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    public message: Message;
    public messages: Message[];
    public sharedService: SharedService;

    @ViewChild('bottom') bottom: ElementRef;

    constructor(
        sharedService: SharedService,
        private avatarGeneratorServiceService: AvatarGeneratorServiceService
    ) {
        this.sharedService = sharedService;

        // Close menu when change page
        this.sharedService.open$.next(false);

        const avatarDentistPath = this.avatarGeneratorServiceService.getUserAvatar(
            true
        );

        this.message = new Message(
            '',
            this.avatarGeneratorServiceService.userAvatar,
            false
        );
        this.messages = [
            new Message(
                'Bonjour je suis Parobot, votre assistant dentaire développé dans le cadre de la thèse de Camille COUFFY. ' +
                    'Je suis une IA qui peut répondre à vos questions concernant la parodonthologie. ' +
                    'Posez-moi vos questions !',
                avatarDentistPath,
                true,
                new Date(),
                null,
                true
            ),
        ];
    }

    ngOnInit() {
        this.sharedService.onMessageReceive.subscribe(() => {
            this.scrollToBottom();
            setTimeout(() => this.scrollToBottom(), 50);
        });
    }

    private scrollToBottom(): void {
        if (this.bottom) {
            this.bottom.nativeElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    }
}
