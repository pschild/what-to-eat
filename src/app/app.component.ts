import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./shared/reducers";
import {getDishes} from "./dishes/dishes.actions";
import {DishPouchService} from "./dishes/dish-pouch.service";

import * as PouchDB from 'pouchdb';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [DishPouchService]
})
export class AppComponent implements OnInit {

    constructor(private store: Store<AppState>, private pouchService: DishPouchService) { }

    ngOnInit(): void {
        this.store.dispatch(getDishes());

        this.pouchService.createDish({ _id: `mydoc-${new Date().toISOString()}`, name: `Kartoffeln-${new Date().toISOString()}` }).subscribe(
            (result) => console.log(result),
            (error) => console.error(error),
            () => console.log('complete')
        );

        this.pouchService.getDishes().subscribe(
            (result) => console.log(result),
            (error) => console.error(error),
            () => console.log('complete')
        );

        PouchDB.sync('dishes', 'http://localhost:5984/dishes');
    }
}
