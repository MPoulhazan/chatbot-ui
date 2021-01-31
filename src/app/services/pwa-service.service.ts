import { HostListener, Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class PwaService {
    deferredPrompt: any;

    constructor() {
        this.isWithMobile();
    }

    @HostListener('window:beforeinstallprompt', ['$event'])
    onbeforeinstallprompt(e) {
        e.preventDefault();
        this.deferredPrompt = e;
    }

    addToHomeScreen() {
        if (this.deferredPrompt) {
            this.deferredPrompt.prompt();

            this.deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                this.deferredPrompt = null;
            });
        } else {
            console.warn('Device is not compatible with app');
        }
    }

    isWithMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    }
}
