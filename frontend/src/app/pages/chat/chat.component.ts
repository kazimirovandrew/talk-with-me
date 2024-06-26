import { Component } from '@angular/core';
import { Message } from '../../shared/models/message.model';
import { ChatService } from '../../shared/services/chat.service';
import { RoutingService } from '../../shared/services/routing.service';
import { UserType } from '../../shared/models/user-type.enum';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  private readonly humanName = 'Mr_Green';
  public userType = UserType;
  public humanText: string = '';
  public messages: Message [] = [];

  constructor(private routingService: RoutingService,
              private chatService: ChatService) {
  }

  public async handleNewMessage(): Promise<void> {
    if (!!this.humanText) {
      const dialog =
        await this.chatService.chat(this.humanName, this.humanText);
      this.messages.push(...dialog);
      this.humanText = '';
    }
  }

  public goToSetup(): void {
    this.routingService.navigateToSetup();
  }
}
