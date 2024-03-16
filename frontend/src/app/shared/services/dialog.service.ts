import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { UserType } from '../models/user-type.enum';

@Injectable()
export class DialogService {
  private readonly defaultAiMessage: Message;
  private messages: Message [] = [];

  constructor() {
    this.defaultAiMessage = this.assembleMessage('Jen', UserType.AI, 'Hi!');
  }

  public addNewDialog(humanName: string, humanText: string,
                      aiName: string, aiText: string): void {
    const newDialog: Message[] = [];
    newDialog.push(this.assembleMessage(humanName, UserType.HUMAN, humanText));
    newDialog.push(this.assembleMessage(aiName, UserType.AI, aiText));
    this.messages.push(...newDialog);
  }

  private assembleMessage(userName: string,
                          userType: UserType,
                          text: string): Message {
    return {
      userName: userName,
      userType: userType,
      text: text
    };
  }

  public doDialog(humanName: string, humanText: string): Message[] {
    const dialog: Message[] = [];

    const humanMessage =
      this.assembleMessage(humanName, UserType.HUMAN, humanText);
    dialog.push(humanMessage);

    const humanMessageIndex =
      this.messages.findIndex(message => message.text === humanText);
    const aiMessage = humanMessageIndex > -1
      ? this.messages[humanMessageIndex + 1]
      : this.defaultAiMessage;
    dialog.push(aiMessage);

    return dialog;
  }
}
