import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoViewerComponent } from './photo-viewer.component';

const routes: Routes = [
    {
        path: ':id',
        component: PhotoViewerComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PhotoViewerRoutingModule {}
