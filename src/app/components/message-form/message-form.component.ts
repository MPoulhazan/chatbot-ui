import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
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
export class MessageFormComponent implements OnInit {
  @Input("message")
  message: Message;

  @Input("messages")
  messages: Message[];

  sharedService: SharedService;

  constructor(
    private dialogFlowService: DialogflowService,
    sharedService: SharedService
  ) {
    this.sharedService = sharedService;
  }

  ngOnInit() {}

  public sendMessage(): void {
    if (!!this.message.content) {
      this.message.timestamp = new Date();
      this.messages.push(this.message);
      const dentistAvatar = this.getDentistAvatar(true);
      const userAvatar = this.getDentistAvatar(false);

      this.dialogFlowService
        .getResponse(this.message.content)
        .subscribe((res: any) => {
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
        });
      this.message = new Message("", userAvatar, false);
    }
  }

  private getDentistAvatar(isDentist: boolean): string {
    const today = new Date();

    if (isDentist) {
      // Month start at 0 so december == 11
      if (today.getMonth() === 11) {
        return Constants.AVATAR_DENTIST_CHRISTMAS_PATH;
      }
      return Constants.AVATAR_DENTIST_PATH;
    } else {
      if (today.getMonth() === 11) {
        return Constants.AVATAR_USER_CHRISTMAS_PATH;
      }
      return Constants.AVATAR_USER_PATH;
    }
  }
}
