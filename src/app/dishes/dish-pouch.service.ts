import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";
import {Dish} from "./dish.model";

import * as PouchDB from 'pouchdb';
import {
    IPouchDBAllDocsResult, IPouchDBPutResult, IPouchDBGetResult,
    IPouchDBRemoveResult
} from "../shared/pouch-db-interfaces";

const localDbName = 'dishes';
const remoteDbName = 'http://localhost:5984/dishes';

@Injectable()
export class DishPouchService {

    private currentDb;
    private localDb;
    private remoteDb;

    constructor() {

        this.localDb = new PouchDB(localDbName);
        this.remoteDb = new PouchDB(remoteDbName);

        this.currentDb = navigator.onLine ? this.remoteDb : this.localDb;
        if (navigator.onLine) {
            this.synchronizeDatabases();
        }

        this.addNetworkStatusChangeListeners();
    }

    addNetworkStatusChangeListeners() {
        let offline = Observable.fromEvent(window, 'offline');
        let online = Observable.fromEvent(window, 'online');

        offline.subscribe(() => {
            this.currentDb = this.localDb;
        });

        online.subscribe(() => {
            this.currentDb = this.remoteDb;
            this.synchronizeDatabases();
        });
    }

    synchronizeDatabases() {
        PouchDB.sync(localDbName, remoteDbName)
        .on('change', function (info) {
            console.log('change', info);
        }).on('paused', function (err) {
            console.log('paused', err);
        }).on('active', function () {
            console.log('active');
        }).on('denied', function (err) {
            console.log('denied', err);
        }).on('complete', function (info) {
            console.log('complete', info);
        }).on('error', function (err) {
            console.log('error', err);
        });
    }

    getDishes(): Observable<Dish[]> {
        return new Observable((observer: Observer<any>) => {
            this.currentDb.allDocs({ include_docs: true })
                .then((result: IPouchDBAllDocsResult) => {
                    // map puchDb result to an array of dishes
                    let dishes = result.rows.map((row: any): Dish => {
                        return {
                            id: row.doc._id,
                            name: row.doc.name
                        };
                    });

                    observer.next(dishes);
                    observer.complete();
                })
                .catch(error => {
                    observer.error(error);
                });
        });
    }

    createDish(data: any): Observable<Dish> {
        return new Observable((observer: Observer<any>) => {
            this.currentDb.put(Object.assign({ _id: 'dish-' + (new Date().getTime()) }, data))
                .then((result: IPouchDBPutResult) => {
                    // after adding the new dish, get its data by another get()
                    this.currentDb.get(result.id)
                        .then((result: IPouchDBGetResult) => {
                            let dish = {
                                id: result._id,
                                name: data.name
                            };

                            observer.next(dish);
                            observer.complete();
                        });
                })
                .catch(error => {
                    observer.error(error);
                });
        });
    }

    updateDish(data: any): Observable<Dish> {
        return new Observable((observer: Observer<any>) => {
            this.currentDb.get(data.dish.id)
                .then((result: IPouchDBGetResult) => {
                    // after getting the dish, update it
                    this.currentDb.put(Object.assign(result, { name: data.newName }))
                        .then((result: IPouchDBPutResult) => {
                            // after updating the dish, get the fresh one from database
                            this.currentDb.get(result.id)
                                .then((result: IPouchDBGetResult) => {
                                    let dish = {
                                        id: result._id,
                                        name: data.name
                                    };

                                    observer.next(dish);
                                    observer.complete();
                                });
                        });
                })
                .catch(error => {
                    observer.error(error);
                });
        });
    }

    deleteDish(dish: Dish) {
        return new Observable((observer: Observer<any>) => {
            this.currentDb.get(dish.id)
                .then((result: IPouchDBGetResult) => {
                    // after getting the dish, remove it
                    this.currentDb.remove(result)
                        .then((result: IPouchDBRemoveResult) => {
                            observer.next({
                                deletedId: result.id
                            });
                            observer.complete();
                        });
                })
                .catch(error => {
                    observer.error(error);
                });
        });
    }

}
