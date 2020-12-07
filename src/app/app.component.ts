import { Component, ViewChild, ElementRef, OnInit, HostListener } from '@angular/core';
import { Message } from '@app/models';
import { SharedService } from './services/shared.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    public message: Message;
    public messages: Message[];

    sharedService: SharedService;

    constructor(sharedService: SharedService) {
        this.sharedService = sharedService;

        this.message = new Message('', 'assets/images/user.png', false);
        this.messages = [
            new Message('Bonjour, je suis votre assistant dentaire, posez-moi vos questions !',
                'assets/images/dentist.png',
                true,
                new Date())
        ];
    }

    ngOnInit() {
        this.sharedService.onMessageReceive.subscribe(() => {
            this.scrollToBottom();
            setTimeout(() => this.scrollToBottom(), 50);
        });
    }

    private scrollToBottom(): void {
        window.scrollTo(0, document.body.scrollHeight);
    }
}
