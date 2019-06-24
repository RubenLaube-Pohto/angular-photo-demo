import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { AlbumBrowserComponent } from './album-browser/album-browser.component';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumViewerComponent } from './album-viewer/album-viewer.component';

@NgModule({
    declarations: [AlbumBrowserComponent, AlbumViewerComponent],
    imports: [CommonModule, AlbumRoutingModule, ComponentsModule],
})
export class AlbumModule {}
