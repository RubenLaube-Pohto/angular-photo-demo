import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { PhotoRoutingModule } from './photo-routing.module';
import { ComponentsModule } from '../components/components.module';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';

@NgModule({
    declarations: [PhotoBrowserComponent, PhotoViewerComponent],
    imports: [CommonModule, PhotoRoutingModule, ComponentsModule, MatCardModule],
})
export class PhotoModule {}
