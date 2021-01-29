import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fui-button',
  templateUrl: './fui-button.component.html',
  styleUrls: ['./fui-button.component.scss'],
})
export class FuiButtonComponent implements OnInit {
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
