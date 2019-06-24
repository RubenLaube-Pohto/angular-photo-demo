import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { UserBrowserComponent } from './user-browser/user-browser.component';
import { UserRoutingModule } from './user-routing.module';
import { UserViewerComponent } from './user-viewer/user-viewer.component';

@NgModule({
    declarations: [UserBrowserComponent, UserViewerComponent],
    imports: [CommonModule, UserRoutingModule, ComponentsModule],
})
export class UserModule {}
