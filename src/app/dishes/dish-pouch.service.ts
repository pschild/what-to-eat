import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {Dish} from "./dish.model";

import * as PouchDB from 'pouchdb';

@Injectable()
export class DishPouchService {

    private localDb;
    private remoteDb;

    constructor() {
        this.localDb = new PouchDB('dishes');
        this.remoteDb = new PouchDB('http://localhost:5984/dishes');
    }

    getDishes(): Observable<Dish[]> {
        return new Observable((observer: Observer<any>) => {
            this.localDb.allDocs({ include_docs: true })
                .then(doc => {
                    observer.next(doc);
                    observer.complete();
                })
                .catch(error => {
                    observer.error(error);
                });
        });
    }

    createDish(data: any): Observable<Dish> {
        return new Observable((observer: Observer<any>) => {
            this.localDb.put(data)
                .then(doc => {
                    observer.next(doc);
                    observer.complete();
                })
                .catch(error => {
                    observer.error(error);
                });
        });
    }

}
