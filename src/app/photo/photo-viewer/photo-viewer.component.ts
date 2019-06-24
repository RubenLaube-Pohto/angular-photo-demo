import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/models/photo.model';

@Component({
    selector: 'app-photo-viewer',
    templateUrl: './photo-viewer.component.html',
    styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent implements OnInit {
    photo: Photo;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe((data: { photo: Photo }) => {
            this.photo = data.photo;
        });
    }
}
