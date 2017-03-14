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
    }
}
