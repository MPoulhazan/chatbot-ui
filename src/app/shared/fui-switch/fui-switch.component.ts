import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

    @Input()
    checked: boolean;

    @Output()
    action: EventEmitter<boolean> = new EventEmitter();

    constructor() {
        this.value = '';
        this.classes = '';
    }

    ngOnInit(): void {}

    doAction(): void {
        this.action.emit(true);
    }
}
