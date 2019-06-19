import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoViewerComponent } from './photo-viewer.component';
import { PhotoResolverService } from '../services/photo-resolver/photo-resolver.service';

const routes: Routes = [
    {
        path: ':id',
        component: PhotoViewerComponent,
        resolve: {
            photo: PhotoResolverService,
        },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PhotoViewerRoutingModule {}
