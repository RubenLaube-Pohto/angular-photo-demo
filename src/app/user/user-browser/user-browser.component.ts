import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/models';

@Component({
    selector: 'app-user-browser',
    templateUrl: './user-browser.component.html',
    styleUrls: ['./user-browser.component.scss'],
})
export class UserBrowserComponent implements OnInit {
    users$: Observable<User[]>;

    constructor(private userService: UserService, public router: Router) {}

    ngOnInit() {
        this.users$ = this.userService.entities$;
        this.userService.getAll();
    }
}
