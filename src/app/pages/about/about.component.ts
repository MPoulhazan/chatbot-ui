import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnInit {
  readonly playstoreLink =
    "https://play.google.com/store/apps/details?id=com.firebaseapp.chatbot_dentist.twa";

  constructor() {}

  ngOnInit(): void {}
}
