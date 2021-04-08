import {
    Component,
    ElementRef,
    HostListener,
    Input,
    OnInit,
} from '@angular/core';
import { PwaService } from '../../services/pwa-service.service';
import { ILink } from '../../models/link';
import { SharedService } from '../../services/shared.service';

@Component({
    selector: 'app-dropdown-menu',
    templateUrl: './dropdown-menu.component.html',
    styleUrls: ['./dropdown-menu.component.scss'],
})
export class DropdownMenuComponent implements OnInit {
    @Input()
    open: boolean;

    @Input()
    links: ILink[];

    isMobile: boolean;
    isDarkMode: boolean;
    isSpeedAnswerActivated: boolean;
    isSoundActivated: boolean;
    sharedService: SharedService;

    readonly pollLink =
        'https://docs.google.com/forms/d/e/1FAIpQLSdWVTyXY-_Fy4xFlVscO5ddwik9Zr0P3PIvNOF2AAW0kXUNjw/viewform?usp=sf_link';

    readonly playstoreLink =
        'https://play.google.com/store/apps/details?id=com.firebaseapp.chatbot_dentist.twa';

    constructor(
        sharedService: SharedService,
        private pwaService: PwaService,
        private eRef: ElementRef
    ) {
        this.sharedService = sharedService;
    }

    ngOnInit(): void {
        this.isMobile = this.pwaService.isWithMobile();
        this.isDarkMode = this.sharedService.isDarkMode;
        this.isSpeedAnswerActivated = this.sharedService.isSpeedAnswer;
        this.isSoundActivated = this.sharedService.isSoundActivated;
    }

    installApp() {
        this.pwaService.addToHomeScreen();
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        this.sharedService.isDarkMode = this.isDarkMode;
        this.sharedService.saveParams('dark', this.isDarkMode);
    }

    toggleSpeedAnswer() {
        this.isSpeedAnswerActivated = !this.isSpeedAnswerActivated;
        this.sharedService.isSpeedAnswer = this.isSpeedAnswerActivated;
        this.sharedService.saveParams('speed', this.isSpeedAnswerActivated);
    }

    toggleSound() {
        this.isSoundActivated = !this.isSoundActivated;
        this.sharedService.isSoundActivated = this.isSoundActivated;
        this.sharedService.saveParams('sound', this.isSoundActivated);
    }

    @HostListener('document:click', ['$event'])
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.open = false;
            this.sharedService.open$.next(false);
        }
    }
}
