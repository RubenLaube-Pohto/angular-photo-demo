import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
    mobileQuery: MediaQueryList;
    private mobileQueryListener: () => void;
    @ViewChild(MatSidenavContainer, { static: false }) sidenav: MatSidenavContainer;

    constructor(private changeDetectorRef: ChangeDetectorRef, private media: MediaMatcher, private router: Router) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        // this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        // this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    }

    ngOnDestroy(): void {
        // this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    }

    goToPage(route: any[]) {
        this.router.navigate(route);
        if (this.mobileQuery.matches) this.sidenav.close();
    }
}
