import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatModule } from './pages/chat/chat.module';
import { SetupModule } from './pages/setup/setup.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    ChatModule,
    SetupModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
