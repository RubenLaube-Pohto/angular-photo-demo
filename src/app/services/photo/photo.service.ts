import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Photo } from 'src/models/photo.model';

@Injectable({
    providedIn: 'root',
})
export class PhotoService extends EntityCollectionServiceBase<Photo> {
    private currentPage = 0;

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Photo', serviceElementsFactory);
    }

    loadNext() {
        this.currentPage++;
        return this.getWithQuery({ _page: this.currentPage.toString(), _limit: '50' });
    }
}
