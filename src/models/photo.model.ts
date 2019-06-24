import { Entity } from './entity.model';

export interface Photo extends Entity {
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
