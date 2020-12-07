import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DialogflowService } from '@app/services';
import { MessageListComponent, MessageFormComponent, MessageItemComponent } from '@app/components'
import { SharedService } from './services/shared.service';
import { LoaderMsgComponent } from './shared/ui-components/loader-msg/loader-msg.component';

@NgModule({
    declarations: [
        AppComponent,
        MessageListComponent,
        MessageFormComponent,
        MessageItemComponent,
        LoaderMsgComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        DialogflowService,
        SharedService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
