import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { first, mergeMap, catchError } from 'rxjs/operators';

import { Album } from 'src/models';
import { AlbumService } from '../album/album.service';

@Injectable({
    providedIn: 'root',
})
export class AlbumResolverService implements Resolve<Album> {
    constructor(private album: AlbumService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Album | Observable<Album> | Promise<Album> {
        const id = route.paramMap.get('id');

        return this.album.getByKey(id).pipe(
            first(),
            mergeMap(photo => {
                return photo ? of(photo) : throwError('Album not found.');
            }),
            catchError(err => {
                this.router.navigate(['albums']);
                return EMPTY;
            })
        );
    }
}
