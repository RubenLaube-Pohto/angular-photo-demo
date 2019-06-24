import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumBrowserComponent } from './album-browser/album-browser.component';
import { AlbumViewerComponent } from './album-viewer/album-viewer.component';
import { AppMaterialModule } from '../app-material.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
    declarations: [AlbumBrowserComponent, AlbumViewerComponent],
    imports: [CommonModule, AlbumRoutingModule, AppMaterialModule, ComponentsModule],
})
export class AlbumModule {}
