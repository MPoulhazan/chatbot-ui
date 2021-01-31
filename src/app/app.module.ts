import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { SharedService } from './services/shared.service';
import {
    TypingAnimationDirective,
    TypingAnimationModule,
} from 'angular-typing-animation';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DialogflowService } from './services';
import {
    MessageFormComponent,
    MessageItemComponent,
    MessageListComponent,
} from './components';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/header/header.component';
import { DropdownMenuComponent } from './shared/dropdown-menu/dropdown-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { FuiButtonComponent } from './shared/fui-button/fui-button.component';
import { FuiSwitchComponent } from './shared/fui-switch/fui-switch.component';
import { PwaService } from './services/pwa-service.service';

@NgModule({
    declarations: [
        AppComponent,
        MessageListComponent,
        MessageFormComponent,
        MessageItemComponent,
        HeaderComponent,
        DropdownMenuComponent,
        HomeComponent,
        AboutComponent,
        FuiButtonComponent,
        FuiSwitchComponent,
    ],
    imports: [
        AppRoutingModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        TypingAnimationModule,
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
        }),
    ],
    providers: [DialogflowService, SharedService, PwaService],
    bootstrap: [AppComponent],
})
export class AppModule {}
