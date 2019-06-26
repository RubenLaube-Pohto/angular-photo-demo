import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Photo } from 'src/models/photo.model';
import { PhotoService } from '../../services/photo/photo.service';

@Component({
    selector: 'app-photo-browser',
    templateUrl: './photo-browser.component.html',
    styleUrls: ['./photo-browser.component.scss'],
})
export class PhotoBrowserComponent implements OnInit, OnDestroy {
    photos$: Observable<Photo[]>;
    lastVisibleIndex$ = new Subject<number>();

    /** Count of loaded photos */
    private count$: Observable<number>;
    private ngUnsubscribe = new Subject<void>();

    constructor(private photoService: PhotoService, private router: Router) {}

    ngOnInit() {
        this.photos$ = this.photoService.entities$;
        this.count$ = this.photoService.count$;
        this.initLoadMore();
    }

    /**
     * Initialize a handler to load more photos when scrolled to the last visible photo
     */
    private initLoadMore() {
        const loadMore = new Subject<void>();

        loadMore
            .pipe(
                takeUntil(this.ngUnsubscribe),
                debounceTime(230)
            )
            .subscribe({ next: () => this.photoService.loadNext() });

        combineLatest(this.count$, this.lastVisibleIndex$, this.photoService.loading$)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe({
                next: ([count, lastVisibleIndex, loading]) => {
                    if (!loading && lastVisibleIndex === count - 1) {
                        loadMore.next();
                    }
                },
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

    openImage(imgId: number) {
        this.router.navigate(['photos', imgId]);
    }
}
