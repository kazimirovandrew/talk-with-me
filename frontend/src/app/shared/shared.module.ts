import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ChatService } from './services/chat.service';
import { RoutingService } from './services/routing.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  exports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    RoutingService,
    ChatService
  ]
})
export class SharedModule {
}
