import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumViewerComponent } from './album-viewer/album-viewer.component';
import { AlbumBrowserComponent } from './album-browser/album-browser.component';
import { AlbumResolverService } from '../services/album-resolver/album-resolver.service';

const routes: Routes = [
    {
        path: ':id',
        component: AlbumViewerComponent,
        resolve: {
            album: AlbumResolverService,
        },
    },
    {
        path: '',
        pathMatch: 'full',
        component: AlbumBrowserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AlbumRoutingModule {}
