import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../../services/google-analytics-service.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
    readonly playstoreLink =
        'https://play.google.com/store/apps/details?id=com.firebaseapp.chatbot_dentist.twa';
    readonly cvLink = 'http://cv-mpoulhazan.herokuapp.com/';

    constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

    ngOnInit(): void {}

    goToProfile() {
        this.googleAnalyticsService.eventEmitter(
            'go_to_profile',
            'profile',
            'button',
            'click',
            10
        );
        window.open(this.cvLink, '_blank');
    }
}
