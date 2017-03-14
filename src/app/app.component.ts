import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "./shared/reducers";
import {getDishes} from "./dishes/dishes.actions";
import {DishPouchService} from "./dishes/dish-pouch.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.store.dispatch(getDishes());
    }
}
