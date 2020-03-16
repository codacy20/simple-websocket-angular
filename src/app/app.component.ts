import { Component } from "@angular/core";
import { WebsocketService } from "./services/websocket";
import { ChatService } from "./services/chat";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [WebsocketService, ChatService]
})
export class AppComponent {
  name = "Angular";
  constructor(private chatService: ChatService) {
    chatService.messages.subscribe(msg => {
      console.log("Response from websocket: " + msg);
    });
  }

  private message = {
    author: "tutorialedge",
    message: "this is a test message"
  };

  sendMsg() {
    console.log("new message from client to websocket: ", this.message);
    this.chatService.messages.next(this.message);
    this.message.message = "";
  }
}
