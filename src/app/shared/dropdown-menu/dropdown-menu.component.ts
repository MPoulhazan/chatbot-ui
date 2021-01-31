import { Component, Input, OnInit } from "@angular/core";
import { PwaService } from "../../services/pwa-service.service";
import { ILink } from "../../models/link";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-dropdown-menu",
  templateUrl: "./dropdown-menu.component.html",
  styleUrls: ["./dropdown-menu.component.scss"],
})
export class DropdownMenuComponent implements OnInit {
  @Input()
  open: boolean;

  @Input()
  links: ILink[];

  isMobile: boolean;
  isDarkMode: boolean;
  isSpeedAnswerActivated: boolean;
  isSoundActivated: boolean;
  sharedService: SharedService;

  constructor(sharedService: SharedService, private pwaService: PwaService) {
    this.sharedService = sharedService;
  }

  ngOnInit(): void {
    this.isMobile = this.pwaService.isWithMobile();
    this.isDarkMode = this.sharedService.isDarkMode;
    this.isSpeedAnswerActivated = this.sharedService.isSpeedAnswer;
    this.isSoundActivated = this.sharedService.isSoundActivated;
  }

  installApp() {
    this.pwaService.addToHomeScreen();
  }

  toggleDarkMode(evt: boolean) {
    this.isDarkMode = !this.isDarkMode;
    this.sharedService.isDarkMode = this.isDarkMode;
    this.sharedService.saveParams("dark", this.isDarkMode);
  }

  toggleSpeedAnswer(evt: boolean) {
    this.isSpeedAnswerActivated = !this.isSpeedAnswerActivated;
    this.sharedService.isSpeedAnswer = this.isSpeedAnswerActivated;
    this.sharedService.saveParams("speed", this.isSpeedAnswerActivated);
  }

  toggleSound(evt: boolean) {
    this.isSoundActivated = !this.isSoundActivated;
    this.sharedService.isSoundActivated = this.isSoundActivated;
    this.sharedService.saveParams("sound", this.isSoundActivated);
  }
}
