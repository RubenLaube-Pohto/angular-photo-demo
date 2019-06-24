import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'albums',
        loadChildren: () => import('./album/album.module').then(mod => mod.AlbumModule),
    },
    {
        path: 'photos',
        loadChildren: () => import('./photo/photo.module').then(mod => mod.PhotoModule),
    },
    {
        path: 'users',
        loadChildren: () => import('./user/user.module').then(mod => mod.UserModule),
    },
    {
        path: '**',
        redirectTo: 'photos',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
