import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DialogService } from './services/dialog.service';
import { RoutingService } from './services/routing.service';

@NgModule({
  exports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [
    RoutingService,
    DialogService
  ]
})
export class SharedModule {
}
