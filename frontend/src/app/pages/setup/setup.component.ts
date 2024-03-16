import { Component } from '@angular/core';
import { DialogService } from '../../shared/services/dialog.service';
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
              private dialogService: DialogService) {
  }

  public handleNewDialog(): void {
    if (!!this.humanText && !!this.aiText) {
      this.dialogService.addNewDialog(
        this.humanName, this.humanText, this.aiName, this.aiText
      );
    }
    this.humanText = '';
    this.aiText = '';
  }

  public goToChat(): void {
    this.routingService.navigateToChat();
  }
}
