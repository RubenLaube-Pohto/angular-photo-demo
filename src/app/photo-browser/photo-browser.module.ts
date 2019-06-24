import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { PhotoBrowserRoutingModule } from './photo-browser-routing.module';
import { PhotoBrowserComponent } from './photo-browser.component';

@NgModule({
    declarations: [PhotoBrowserComponent],
    imports: [CommonModule, PhotoBrowserRoutingModule, ComponentsModule],
})
export class PhotoBrowserModule {}
