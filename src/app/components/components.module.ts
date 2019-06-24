import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

/**
 * Shared components module
 */
@NgModule({
    declarations: [ImageGridComponent],
    imports: [CommonModule, VirtualScrollerModule],
    exports: [ImageGridComponent],
})
export class ComponentsModule {}
