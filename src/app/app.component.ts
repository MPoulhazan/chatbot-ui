import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  HostListener,
} from "@angular/core";
import { Message } from "@app/models";
import { SharedService } from "./services/shared.service";
import { Constants } from "./utils/constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public message: Message;
  public messages: Message[];
  private sharedService: SharedService;

  constructor(sharedService: SharedService) {
    this.sharedService = sharedService;
    const avatarDentistPath = this.getDentistAvatar(true);
    const avatarUserPath = this.getDentistAvatar(false);

    this.message = new Message("", avatarUserPath, false);
    this.messages = [
      new Message(
        "Bonjour, je suis votre assistant dentaire, posez-moi vos questions !",
        avatarDentistPath,
        true,
        new Date()
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
    window.scrollTo(0, document.body.scrollHeight);
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
