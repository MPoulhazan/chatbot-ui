import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { DialogflowService } from "@app/services";
import {
  MessageListComponent,
  MessageFormComponent,
  MessageItemComponent,
} from "@app/components";
import { SharedService } from "./services/shared.service";
import { TypingAnimationDirective } from "angular-typing-animation";

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessageFormComponent,
    MessageItemComponent,
    TypingAnimationDirective,
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [DialogflowService, SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
