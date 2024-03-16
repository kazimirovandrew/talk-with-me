import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ChatComponent
  ],
  exports: [
    ChatComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ChatModule {
}
