import { UserType } from './user-type.enum';

export interface Message {
  userName: string,
  userType: UserType,
  text: string
}
