import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/models';

@Component({
    selector: 'app-user-viewer',
    templateUrl: './user-viewer.component.html',
    styleUrls: ['./user-viewer.component.scss'],
})
export class UserViewerComponent implements OnInit {
    user$: Observable<User>;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.user$ = this.route.data.pipe(map((data: { user: User }) => data.user));
    }
}
