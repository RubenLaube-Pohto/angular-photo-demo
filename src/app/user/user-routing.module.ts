import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserResolverService } from '../services/user-resolver/user-resolver.service';
import { UserBrowserComponent } from './user-browser/user-browser.component';
import { UserViewerComponent } from './user-viewer/user-viewer.component';

const routes: Routes = [
    {
        path: ':id',
        component: UserViewerComponent,
        resolve: {
            photo: UserResolverService,
        },
    },
    {
        path: '',
        pathMatch: 'full',
        component: UserBrowserComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UserRoutingModule {}
