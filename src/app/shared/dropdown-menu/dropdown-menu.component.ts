import { Component, Input, OnInit } from "@angular/core";
import { PwaService } from "../../services/pwa-service.service";
import { ILink } from "../../models/link";

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

  constructor(private pwaService: PwaService) {}

  ngOnInit(): void {
    this.isMobile = this.pwaService.isWithMobile();
  }

  installApp() {
    this.pwaService.addToHomeScreen();
  }
}
