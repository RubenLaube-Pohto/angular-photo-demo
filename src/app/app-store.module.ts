import { NgModule } from '@angular/core';
import { DefaultDataServiceConfig, EntityDataModule, EntityMetadataMap, EntityServices } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AlbumService } from './services/album/album.service';
import { PhotoService } from './services/photo/photo.service';
import { UserService } from './services/user/user.service';

export function sortById(a, b) {
    return a.id - b.id;
}
export const entityMetadata: EntityMetadataMap = {
    Photo: { sortComparer: sortById },
    Album: { sortComparer: sortById },
    User: { sortComparer: sortById },
};
export const entityConfig = {
    entityMetadata,
};
const API_ROOT = 'https://jsonplaceholder.typicode.com';

@NgModule({
    declarations: [],
    imports: [StoreModule.forRoot({}), EffectsModule.forRoot([]), EntityDataModule.forRoot(entityConfig)],
    providers: [
        {
            provide: DefaultDataServiceConfig,
            useValue: {
                root: API_ROOT,
                // By default @ngrx/data would use entity name as enpoint
                // for single ops e.g. GET photo/1 but pluralize collection
                // e.g. GET photos. Server uses pluralized for both so need to overwrite.
                entityHttpResourceUrls: {
                    Photo: {
                        entityResourceUrl: API_ROOT + '/photos/',
                        collectionResourceUrl: API_ROOT + '/photos/',
                    },
                    Album: {
                        entityResourceUrl: API_ROOT + '/albums/',
                        collectionResourceUrl: API_ROOT + '/albums/',
                    },
                    User: {
                        entityResourceUrl: API_ROOT + '/users/',
                        collectionResourceUrl: API_ROOT + '/users/',
                    },
                },
            },
        },
    ],
})
export class AppStoreModule {
    constructor(
        entityServices: EntityServices,
        photoService: PhotoService,
        albumService: AlbumService,
        userService: UserService
    ) {
        entityServices.registerEntityCollectionServices([photoService, albumService, userService]);
    }
}
