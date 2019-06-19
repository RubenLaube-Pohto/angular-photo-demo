import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { PhotoViewerRoutingModule } from './photo-viewer-routing.module';
import { PhotoViewerComponent } from './photo-viewer.component';

@NgModule({
    declarations: [PhotoViewerComponent],
    imports: [CommonModule, PhotoViewerRoutingModule, MatCardModule],
})
export class PhotoViewerModule {}
