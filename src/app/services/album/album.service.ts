import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Album } from 'src/models';

@Injectable({
    providedIn: 'root',
})
export class AlbumService extends EntityCollectionServiceBase<Album> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Album', serviceElementsFactory);
    }
}
