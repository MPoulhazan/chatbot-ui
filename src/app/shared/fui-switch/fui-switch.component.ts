import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fui-switch',
  templateUrl: './fui-switch.component.html',
  styleUrls: ['./fui-switch.component.scss'],
})
export class FuiSwitchComponent implements OnInit {
  @Input()
  value: string;

  @Input()
  classes: string;

  constructor() {
    this.value = '';
    this.classes = '';
  }

  ngOnInit(): void {}
}
