import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { UserType } from '../models/user-type.enum';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Urls } from '../models/server-urls';
import { MessageAssembler } from '../assemblers/message.assembler';
import { ChatResponse } from '../dtos/chat-response.dto';

@Injectable()
export class ChatService {
  private readonly defaultAiMessage: Message;
  private messages: Message [] = [];

  constructor(private http: HttpClient) {
    this.defaultAiMessage =
      MessageAssembler.assemble('Jen', UserType.AI, 'Hi!');
  }

  public addNewDialog(humanName: string, humanText: string,
                      aiName: string, aiText: string): void {
    const newDialog: Message[] = [];
    newDialog.push(
      MessageAssembler.assemble(humanName, UserType.HUMAN, humanText)
    );
    newDialog.push(
      MessageAssembler.assemble(aiName, UserType.AI, aiText)
    );
    this.messages.push(...newDialog);
  }

  public async chat(humanName: string, humanText: string): Promise<Message[]> {
    const dialog: Message[] = [];

    const humanMessage =
      MessageAssembler.assemble(humanName, UserType.HUMAN, humanText);
    dialog.push(humanMessage);

    const aiMessage = await this.getAiMessage(humanMessage);
    dialog.push(aiMessage);

    return dialog;
  }

  private async getAiMessage(humanMessage: Message): Promise<Message> {
    const request = this.http.post<ChatResponse>(
      Urls.CHAT, {'humanMessage': humanMessage.text}
    );
    return await firstValueFrom(request)
      .then(response =>
        MessageAssembler.assemble('Jen', UserType.AI, response.aiMessage)
      ).catch(() => {
        return this.defaultAiMessage;
      });
  }
}
