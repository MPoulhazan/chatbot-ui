import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy,
} from "@angular/core";
import { AvatarGenerator } from "random-avatar-generator";
import { AvatarGeneratorServiceService } from "../../services/avatar-generator-service.service";
import { Message } from "../../models";
import { IImageMessage } from "../../models/image-message";
import { DialogflowService } from "../../services";
import { SharedService } from "../../services/shared.service";
import { Constants } from "../../utils/constants";

@Component({
  selector: "message-form",
  templateUrl: "./message-form.component.html",
  styleUrls: ["./message-form.component.scss"],
})
export class MessageFormComponent implements OnInit, OnDestroy {
  @Input("message")
  message: Message;

  @Input("messages")
  messages: Message[];

  sharedService: SharedService;

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
    this.sharedService.newAvatarEvent.unsubscribe();
  }

  public sendMessage(): void {
    if (!!this.message.content) {
      this.message.timestamp = new Date();
      this.messages.push(this.message);
      const dentistAvatar = this.avatarGeneratorServiceService.getUserAvatar(
        true
      );

      this.dialogFlowService.getResponse(this.message.content).subscribe(
        (res: any) => {
          const images: IImageMessage[] = res.result.fulfillment.messages;
          this.messages.push(
            new Message(
              res.result.fulfillment.speech,
              dentistAvatar,
              true,
              res.timestamp,
              images,
              !this.sharedService.isSpeedAnswer
            )
          );
          this.sharedService.onMessageReceive.emit(true);
        },
        (err) => console.log("err"),
        () => {
          this.message = new Message(
            "",
            this.avatarGeneratorServiceService.userAvatar,
            false
          );
        }
      );
    }
  }

  ckekNewAvatar() {
    this.sharedService.newAvatarEvent.subscribe(() => {
      if (this.message)
        this.message.avatar = this.avatarGeneratorServiceService.userAvatar;
    });
  }
}
