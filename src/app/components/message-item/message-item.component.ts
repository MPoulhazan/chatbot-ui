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
  name = '';

  constructor() { }

  ngOnInit() {

    this.name = this.getName();
    
    this.hasImageInMsg = this.message.imageMessage
      && this.message.imageMessage.length > 0
      && this.message.imageMessage.filter(img => img.imageUrl).length > 0;
  }

  private getName(): string {
    if(this.message.isBot) {
      return 'Parobot';
    }
    return 'Vous';
  }
}
