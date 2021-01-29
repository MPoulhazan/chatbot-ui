import { Component, Input, OnInit } from "@angular/core";
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

  constructor() {}

  ngOnInit(): void {}
}
