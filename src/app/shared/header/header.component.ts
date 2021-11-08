import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ILink } from '../../models/link';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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
    private destroy$ = new Subject();
    // Quand tu as fait une école à 10k l'année et que le stagiaire non diplomé vient te faire la remarque que la typo est trop grande sur les slides que tu as préparé pour Fabieng
    constructor(sharedService: SharedService) {
        this.sharedService = sharedService;
    }

    ngOnInit(): void {
        this.links = this.getLinks();
        this.sharedService.open$
            .pipe(takeUntil(this.destroy$))
            .subscribe((opened) => (this.open = opened));
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
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
