import { Component } from '@angular/core';
import { ChatService } from '../../shared/services/chat.service';
import { RoutingService } from '../../shared/services/routing.service';

@Component({
  selector: 'setup',
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.scss'
})
export class SetupComponent {
  public readonly humanName = 'Mr_Green';
  public readonly aiName = 'Jen';
  public humanText: string = '';
  public aiText: string = '';

  constructor(private routingService: RoutingService,
              private chatService: ChatService) {
  }

  public handleNewDialog(): void {
    if (!!this.humanText && !!this.aiText) {
      this.chatService.addNewDialog(
        this.humanName, this.humanText, this.aiName, this.aiText
      );
      this.humanText = '';
      this.aiText = '';
    }
  }

  public goToChat(): void {
    this.routingService.navigateToChat();
  }
}
