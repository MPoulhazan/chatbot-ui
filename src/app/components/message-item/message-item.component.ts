import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { SharedService } from "../../services/shared.service";
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
  isShowImage = true;
  private audio = new Audio();

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.name = this.getName();
    this.audio.src = "../../assets/sounds/typing.mp3";
    this.audio.load();

    if (this.message.isTypingEffect) this.audio.play();

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

  private getName(): string {
    if (this.message.isBot) {
      return "Parobot";
    }
    return "Vous";
  }
}
