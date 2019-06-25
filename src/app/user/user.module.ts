import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatInputModule } from '@angular/material';
import { ComponentsModule } from '../components/components.module';
import { UserBrowserComponent } from './user-browser/user-browser.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoutingModule } from './user-routing.module';
import { UserViewerComponent } from './user-viewer/user-viewer.component';

@NgModule({
    declarations: [UserBrowserComponent, UserViewerComponent, UserFormComponent],
    imports: [
        CommonModule,
        UserRoutingModule,
        ComponentsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatCardModule,
        FlexLayoutModule,
    ],
})
export class UserModule {}
