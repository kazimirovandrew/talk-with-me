import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutingService {

  constructor(private router: Router) {
  }

  public navigateToChat(): void {
    this.router.navigate(['/chat']);
  }

  public navigateToSetup(): void {
    this.router.navigate(['/setup']);
  }
}
