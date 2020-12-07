import { Component, OnInit, Input, AfterViewInit, ViewChild, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Message } from '@app/models';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

    @Input('messages')
    public messages: Message[];

    sharedService: SharedService;

    constructor(sharedService: SharedService) {
        this.sharedService = sharedService;
    }

    ngOnInit() {
    }
}
