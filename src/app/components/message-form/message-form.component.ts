import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Message } from '../../models';
import { IImageMessage } from '../../models/image-message';
import { DialogflowService } from '../../services';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'message-form',
    templateUrl: './message-form.component.html',
    styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

    @Input('message')
    message: Message;

    @Input('messages')
    messages: Message[];

    sharedService: SharedService;

    constructor(private dialogFlowService: DialogflowService,
        sharedService: SharedService) {
        this.sharedService = sharedService;
    }

    ngOnInit() {
    }

    public sendMessage(): void {
        this.message.timestamp = new Date();
        this.messages.push(this.message);

        this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
            const images: IImageMessage[] = res.result.fulfillment.messages;
            this.messages.push(
                new Message(res.result.fulfillment.speech, 'assets/images/dentist.png', true, res.timestamp, images)
            );
            this.sharedService.onMessageReceive.emit(true);
        });

        this.message = new Message('', 'assets/images/user.png', false);
    }
}
