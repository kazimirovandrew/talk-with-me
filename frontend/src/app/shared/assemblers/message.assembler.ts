import { UserType } from '../models/user-type.enum';
import { Message } from '../models/message.model';

export class MessageAssembler {

  public static assemble(
    userName: string,
    userType: UserType,
    text: string): Message {
    return {
      userName: userName,
      userType: userType,
      text: text
    };
  }
}
