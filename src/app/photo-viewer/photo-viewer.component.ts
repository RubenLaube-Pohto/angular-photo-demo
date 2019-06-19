import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PhotoService } from '../services/photo/photo.service';
import { Photo } from 'src/models/photo.model';

@Component({
    selector: 'app-photo-viewer',
    templateUrl: './photo-viewer.component.html',
    styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent implements OnInit {
    photoId$: Observable<string>;
    selectedPhoto$: Observable<Photo>;

    constructor(private route: ActivatedRoute, private photoService: PhotoService) {}

    ngOnInit() {
        this.photoId$ = this.route.paramMap.pipe(map(params => params.get('id')));
        this.selectedPhoto$ = this.photoId$.pipe(switchMap(photoId => this.photoService.getByKey(photoId)));
        this.selectedPhoto$.subscribe(console.log);
    }
}
