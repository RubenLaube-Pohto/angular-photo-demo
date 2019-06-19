import { Component, OnInit } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { first, map, switchMap } from 'rxjs/operators';
import { IPageInfo } from 'ngx-virtual-scroller';
import { Router } from '@angular/router';

import { PhotoService } from '../services/photo/photo.service';
import { Photo } from 'src/models/photo.model';

@Component({
    selector: 'app-photo-browser',
    templateUrl: './photo-browser.component.html',
    styleUrls: ['./photo-browser.component.scss'],
})
export class PhotoBrowserComponent implements OnInit {
    photos$: Observable<Photo[]>;

    constructor(private photoService: PhotoService, private router: Router) {}

    ngOnInit() {
        this.photos$ = this.photoService.entities$;
        this.photoService.loadNext(true);
        this.photos$.subscribe(p => console.log('store photos', p));
    }

    loadNext(e: IPageInfo) {
        const count$ = this.photos$.pipe(
            first(),
            map(p => p.length)
        );
        const shouldLoad$ = count$.pipe(map(count => e.endIndex === count - 1));

        shouldLoad$.pipe(switchMap(load => (load ? this.photoService.loadNext() : EMPTY))).subscribe();
    }

    openImage(imgId: number) {
        this.router.navigate(['photos', imgId]);
    }

    trackById(index: number, photo: Photo) {
        return photo.id;
    }
}
