
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Availability {
    id?: Nullable<string>;
    spaceId?: Nullable<string>;
}

export abstract class IQuery {
    abstract availability(id: number): Nullable<Availability> | Promise<Nullable<Availability>>;
}

type Nullable<T> = T | null;
