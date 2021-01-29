import { Component, Input, OnInit } from "@angular/core";
import { SharedService } from "../../services/shared.service";

@Component({
  selector: "app-fui-switch",
  templateUrl: "./fui-switch.component.html",
  styleUrls: ["./fui-switch.component.scss"],
})
export class FuiSwitchComponent implements OnInit {
  @Input()
  value: string;

  @Input()
  classes: string;

  checked: boolean;

  constructor(private sharedService: SharedService) {
    this.value = "";
    this.classes = "";
  }

  ngOnInit(): void {
    this.checked = this.sharedService.isSpeedAnswer;
  }

  setSpeedAnswer() {
    this.checked = !this.checked;
    this.sharedService.isSpeedAnswer = this.checked;
  }
}
