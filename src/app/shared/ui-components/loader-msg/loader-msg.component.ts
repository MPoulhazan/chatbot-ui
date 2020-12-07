import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader-msg',
  templateUrl: './loader-msg.component.html',
  styleUrls: ['./loader-msg.component.scss']
})
export class LoaderMsgComponent implements OnInit {

  dentistAvatarPath = 'assets/images/dentist.png';

  constructor() { }

  ngOnInit() {
  }

}
