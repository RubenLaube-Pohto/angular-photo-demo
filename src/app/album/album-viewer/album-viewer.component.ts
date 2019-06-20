import { Component, OnInit } from '@angular/core';

import { Album, Photo } from 'src/models';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-album-viewer',
    templateUrl: './album-viewer.component.html',
    styleUrls: ['./album-viewer.component.scss'],
})
export class AlbumViewerComponent implements OnInit {
    album$: Observable<Album>;
    photos$: Observable<Photo[]>;

    constructor(private route: ActivatedRoute, private photoService: PhotoService) {}

    ngOnInit() {
        this.album$ = this.route.data.pipe(map((data: { album: Album }) => data.album));
        this.photos$ = this.album$.pipe(switchMap(album => this.photoService.getWithQuery({ albumId: '' + album.id })));
    }
}
