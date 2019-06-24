import { Entity } from './entity.model';

export interface Album extends Entity {
    userId: number;
    title: string;
}
