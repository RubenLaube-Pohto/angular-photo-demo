import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { EMPTY, Observable, of, throwError } from 'rxjs';
import { catchError, first, map, mergeMap } from 'rxjs/operators';
import { User } from 'src/models';
import { UserService } from '../user/user.service';

@Injectable({
    providedIn: 'root',
})
export class UserResolverService implements Resolve<User> {
    constructor(private userService: UserService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<User> | Promise<User> {
        const id = route.paramMap.get('id');
        const storeEntity = this.userService.entityMap$.pipe(map(entityMap => entityMap[id]));
        const entity = storeEntity.pipe(mergeMap(e => (e ? of(e) : this.userService.getByKey(id))));

        return entity.pipe(
            first(),
            mergeMap(user => {
                return user ? of(user) : throwError('User not found.');
            }),
            catchError(err => {
                this.router.navigate(['users']);
                return EMPTY;
            })
        );
    }
}
