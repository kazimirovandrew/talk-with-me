import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ChatComponent } from './pages/chat/chat.component';
import { SetupComponent } from './pages/setup/setup.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/chat',
    pathMatch: 'full'
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'setup',
    component: SetupComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
