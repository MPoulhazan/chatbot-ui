import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  message: Message;

  hasImageInMsg = false;

  constructor() { }

  ngOnInit() {
    this.hasImageInMsg = this.message.imageMessage && this.message.imageMessage.length > 0;
  }

  // private getImagesInMessage() {
  //   this.message.imageMessage && this.message.imageMessage.length > 0 ? this.message.imageMessage.
  // }

}
