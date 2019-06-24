import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserBrowserComponent } from './user-browser/user-browser.component';
import { UserViewerComponent } from './user-viewer/user-viewer.component';

@NgModule({
  declarations: [UserBrowserComponent, UserViewerComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
