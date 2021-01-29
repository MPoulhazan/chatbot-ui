import { Component, Input, OnInit } from "@angular/core";
import { PwaService } from "../../services/pwa-service.service";
import { ILink } from "../../models/link";
import { SharedService } from "../../services/shared.service";
import { NgModuleResolver } from "@angular/compiler";

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
  isSpeedAnswerActivated: boolean;
  isSoundActivated: boolean;

  constructor(
    private pwaService: PwaService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.isMobile = this.pwaService.isWithMobile();
    this.isSpeedAnswerActivated = this.sharedService.isSpeedAnswer;
    this.isSoundActivated = this.sharedService.isSoundActivated;
  }

  installApp() {
    this.pwaService.addToHomeScreen();
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
