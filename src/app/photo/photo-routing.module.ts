import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotoResolverService } from '../services/photo-resolver/photo-resolver.service';
import { PhotoBrowserComponent } from './photo-browser/photo-browser.component';
import { PhotoViewerComponent } from './photo-viewer/photo-viewer.component';

const routes: Routes = [
    {
        path: ':id',
        component: PhotoViewerComponent,
        resolve: {
            photo: PhotoResolverService,
        },
    },
    {
        path: '',
        pathMatch: 'full',
        component: PhotoBrowserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PhotoRoutingModule {}
