import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { FlexLayoutModule } from '@angular/flex-layout';

import { PhotoBrowserRoutingModule } from './photo-browser-routing.module';
import { PhotoBrowserComponent } from './photo-browser.component';

@NgModule({
    declarations: [PhotoBrowserComponent],
    imports: [
        CommonModule,
        PhotoBrowserRoutingModule,
        MatGridListModule,
        ScrollingModule,
        VirtualScrollerModule,
        FlexLayoutModule,
    ],
})
export class PhotoBrowserModule {}
