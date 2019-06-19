import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { switchMap, first } from 'rxjs/operators';
import { Photo } from 'src/models/photo.model';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PhotoService extends EntityCollectionServiceBase<Photo> {
    private currentPage = 0;

    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Photo', serviceElementsFactory);
    }

    loadNext(force = false) {
        const loading$ = force ? of(false) : this.loading$.pipe(first());

        return loading$.pipe(
            switchMap(loading => {
                if (loading) {
                    return of<Photo[]>([]);
                } else {
                    this.currentPage++;
                    return this.getWithQuery({ _page: this.currentPage.toString(), _limit: '50' });
                }
            })
        );
    }
}
