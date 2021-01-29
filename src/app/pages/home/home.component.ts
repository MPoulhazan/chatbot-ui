import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Message } from "../../models";
import { SharedService } from "../../services/shared.service";
import { Constants } from "../../utils/constants";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public message: Message;
  public messages: Message[];
  private sharedService: SharedService;

  @ViewChild("bottom") bottom: ElementRef;

  constructor(sharedService: SharedService) {
    this.sharedService = sharedService;
    const avatarDentistPath = this.getDentistAvatar(true);
    const avatarUserPath = this.getDentistAvatar(false);

    this.message = new Message("", avatarUserPath, false);
    this.messages = [
      new Message(
        "Bonjour je suis Parobot, votre assistant dentaire développé dans le cadre de la thèse de Camille COUFFY. " +
          "Je suis une IA qui peux répondre à vos questions concernant la parodonthologie. " +
          "Posez-moi vos questions !",
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
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
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
