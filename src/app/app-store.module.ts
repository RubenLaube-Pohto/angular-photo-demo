import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityServices, EntityDataModule, EntityMetadataMap, DefaultDataServiceConfig } from '@ngrx/data';

import { PhotoService } from './services/photo/photo.service';
import { AlbumService } from './services/album/album.service';

export function sortById(a, b) {
    return a.id - b.id;
}
export const entityMetadata: EntityMetadataMap = {
    Photo: { sortComparer: sortById },
    Album: { sortComparer: sortById },
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
                },
            },
        },
    ],
})
export class AppStoreModule {
    constructor(entityServices: EntityServices, photoService: PhotoService, albumService: AlbumService) {
        entityServices.registerEntityCollectionServices([photoService, albumService]);
    }
}
