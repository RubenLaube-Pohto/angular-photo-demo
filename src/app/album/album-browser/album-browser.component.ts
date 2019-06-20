import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AlbumService } from 'src/app/services/album/album.service';
import { Album } from 'src/models';

@Component({
    selector: 'app-album-browser',
    templateUrl: './album-browser.component.html',
    styleUrls: ['./album-browser.component.scss'],
})
export class AlbumBrowserComponent implements OnInit {
    albums$: Observable<Album[]>;

    constructor(private albumService: AlbumService, public router: Router) {}

    ngOnInit() {
        this.albums$ = this.albumService.entities$;
        this.albumService.getAll();
    }
}
