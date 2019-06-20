import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { first, mergeMap, catchError, map } from 'rxjs/operators';

import { Album } from 'src/models';
import { AlbumService } from '../album/album.service';

@Injectable({
    providedIn: 'root',
})
export class AlbumResolverService implements Resolve<Album> {
    constructor(private albumService: AlbumService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Album | Observable<Album> | Promise<Album> {
        const id = route.paramMap.get('id');
        const storeEntity = this.albumService.entityMap$.pipe(map(entityMap => entityMap[id]));
        const entity = storeEntity.pipe(mergeMap(e => (e ? of(e) : this.albumService.getByKey(id))));

        return entity.pipe(
            first(),
            mergeMap(album => {
                return album ? of(album) : throwError('Album not found.');
            }),
            catchError(err => {
                this.router.navigate(['albums']);
                return EMPTY;
            })
        );
    }
}
