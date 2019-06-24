import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Entity } from 'src/models';

@Component({
    selector: 'app-data-list',
    templateUrl: './data-list.component.html',
    styleUrls: ['./data-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataListComponent implements OnInit {
    @Input() entities: Entity[];
    @Input() displayProp: string;
    @Input() icon: string;

    @Output() selectEntity = new EventEmitter<Entity>();

    constructor() {}

    ngOnInit() {}
}
