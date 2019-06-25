import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
    @Input() user: User;

    userForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        // TODO: Errors will happen if nested object is undefined
        this.userForm = this.fb.group({
            name: [this.user.name],
            username: [this.user.username],
            email: [this.user.email],
            address: this.fb.group({
                street: [this.user.address.street],
                suite: [this.user.address.suite],
                city: [this.user.address.city],
                zipcode: [this.user.address.zipcode],
                geo: this.fb.group({
                    lat: [this.user.address.geo.lat],
                    lng: [this.user.address.geo.lng],
                }),
            }),
            phone: [this.user.phone],
            website: [this.user.website],
            company: this.fb.group({
                name: [this.user.company.name],
                catchPhrase: [this.user.company.catchPhrase],
                bs: [this.user.company.bs],
            }),
        });
    }
}
