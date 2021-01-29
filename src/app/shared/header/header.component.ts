import { Component, OnInit } from "@angular/core";
import { SharedService } from "../../services/shared.service";
import { ILink } from "../../models/link";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  links: ILink[];
  open = false;
  sharedService: SharedService;

  constructor(sharedService: SharedService) {
    this.sharedService = sharedService;
  }

  ngOnInit(): void {
    this.links = this.getLinks();
  }

  private getLinks(): ILink[] {
    return [
      { url: "/", label: "Parobot" } as ILink,
      { url: "/about", label: "A propos" } as ILink,
    ] as ILink[];
  }
}
