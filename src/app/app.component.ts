import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { NEVER, Observable, of } from 'rxjs';
import { distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    @ViewChild(MatSidenavContainer, { static: false }) sidenav: MatSidenavContainer;

    /** Query to check if using a small mobile screen */
    mobileQuery: MediaQueryList;
    /** Path to current page in app */
    path$: Observable<string[]>;

    constructor(private router: Router, private media: MediaMatcher) {}

    ngOnInit() {
        this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
        this.path$ = this.router.events.pipe(
            // pick only event that have an url
            mergeMap((e: any) => (e.url ? of(e.url) : NEVER)),
            // don't care if same url ouput multiple times
            distinctUntilChanged(),
            // split to segments
            map((s: string) => s.split('/').slice(1))
        );
    }

    goToPage(route: any[]) {
        this.router.navigate(route);
        if (this.mobileQuery.matches) {
            this.sidenav.close();
        }
    }
}
