import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ILink } from '../../models/link';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    links: ILink[];
    open = false;
    sharedService: SharedService;
    openSubscription: Subscription;

    constructor(sharedService: SharedService) {
        this.sharedService = sharedService;
    }

    ngOnInit(): void {
        this.links = this.getLinks();
        this.openSubscription = this.sharedService.open$.subscribe(
            (opened) => (this.open = opened)
        );
    }

    ngOnDestroy(): void {
        this.openSubscription.unsubscribe();
    }

    toggleOpen() {
        this.sharedService.open$.next(!this.open);
    }

    private getLinks(): ILink[] {
        return [
            { url: '/', label: 'Parobot' } as ILink,
            { url: '/about', label: 'A propos' } as ILink,
        ] as ILink[];
    }
}
