import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoBrowserComponent } from './photo-browser.component';

const routes: Routes = [
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
export class PhotoBrowserRoutingModule {}
