import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'photos',
        pathMatch: 'full', // Full match to open photo browser instead of a single view
        loadChildren: () => import('./photo-browser/photo-browser.module').then(mod => mod.PhotoBrowserModule),
    },
    {
        path: 'photos',
        loadChildren: () => import('./photo-viewer/photo-viewer.module').then(mod => mod.PhotoViewerModule),
    },
    {
        path: '**',
        redirectTo: 'photos',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
