import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { Message } from "../../models";

@Component({
  selector: "message-item",
  templateUrl: "./message-item.component.html",
  styleUrls: ["./message-item.component.scss"],
})
export class MessageItemComponent implements OnInit, OnDestroy {
  @Input("message")
  message: Message;

  hasImageInMsg = false;
  name = "";
  private audio = new Audio();

  constructor() {}

  ngOnInit() {
    this.name = this.getName();
    this.audio.src = "../../assets/sounds/typing.mp3";
    this.audio.load();

    if (this.message.isTypingEffect) this.audio.play();

    this.hasImageInMsg =
      this.message.imageMessage &&
      this.message.imageMessage.length > 0 &&
      this.message.imageMessage.filter((img) => img.imageUrl).length > 0;
  }

  ngOnDestroy() {
    if (this.audio) this.audio.pause();
    this.audio = null;
  }

  onComplete() {
    if (this.audio) this.audio.pause();
    this.audio = null;
  }

  private getName(): string {
    if (this.message.isBot) {
      return "Parobot";
    }
    return "Vous";
  }
}
