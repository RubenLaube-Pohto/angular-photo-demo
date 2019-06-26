import { MediaMatcher } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    /** Query to check if using a small mobile screen */
    mobileQuery: MediaQueryList;
    @ViewChild(MatSidenavContainer, { static: false }) sidenav: MatSidenavContainer;

    constructor(private router: Router, private media: MediaMatcher) {
        this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    }

    goToPage(route: any[]) {
        this.router.navigate(route);
        if (this.mobileQuery.matches) {
            this.sidenav.close();
        }
    }
}
