import { NgModule } from '@angular/core';
import { SetupComponent } from './setup.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    SetupComponent
  ],
  exports: [
    SetupComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SetupModule {
}
