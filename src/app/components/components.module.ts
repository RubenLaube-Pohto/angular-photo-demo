import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule, MatListModule } from '@angular/material';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';
import { DataListComponent } from './data-list/data-list.component';
import { ImageGridComponent } from './image-grid/image-grid.component';

/**
 * Shared components module
 */
@NgModule({
    declarations: [ImageGridComponent, DataListComponent],
    imports: [CommonModule, VirtualScrollerModule, MatListModule, MatIconModule],
    exports: [ImageGridComponent, DataListComponent],
})
export class ComponentsModule {}
