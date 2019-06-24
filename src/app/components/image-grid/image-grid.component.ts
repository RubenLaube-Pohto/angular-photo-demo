import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ElementRef,
    ViewEncapsulation,
} from '@angular/core';
import { Photo } from 'src/models';

/**
 * Component that creates a grid of images from Photos
 *
 * View encapsulation none and element reference are required
 * for the virtual scroll to work correctly. Disabling of view
 * encapsulation requires css selector to be set to this component.
 */
@Component({
    selector: 'app-image-grid',
    templateUrl: './image-grid.component.html',
    styleUrls: ['./image-grid.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class ImageGridComponent implements OnInit {
    @Input() photos: Photo[];
    @Output() scrollEnd = new EventEmitter<number>();
    @Output() selectPhoto = new EventEmitter<Photo>();

    constructor(public elRef: ElementRef) {}

    ngOnInit() {}

    trackById(index: number, photo: Photo) {
        return photo.id;
    }
}
