import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { first, mergeMap, catchError } from 'rxjs/operators';

import { PhotoService } from '../photo/photo.service';
import { Photo } from 'src/models/photo.model';

@Injectable({
    providedIn: 'root',
})
export class PhotoResolverService implements Resolve<Photo> {
    constructor(private photoService: PhotoService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Photo | Observable<Photo> | Promise<Photo> {
        const id = route.paramMap.get('id');

        return this.photoService.getByKey(id).pipe(
            first(),
            mergeMap(photo => {
                return photo ? of(photo) : throwError('Photo not found.');
            }),
            catchError(err => {
                this.router.navigate(['photos']);
                return EMPTY;
            })
        );
    }
}
