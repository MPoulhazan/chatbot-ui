import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";

import { SharedService } from "./services/shared.service";
import {
  TypingAnimationDirective,
  TypingAnimationModule,
} from "angular-typing-animation";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";
import { DialogflowService } from "./services";
import {
  MessageFormComponent,
  MessageItemComponent,
  MessageListComponent,
} from "./components";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TypingAnimationModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production,
    }),
  ],
  providers: [DialogflowService, SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
