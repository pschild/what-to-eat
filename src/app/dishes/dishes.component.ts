import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../shared/reducers";
import {Dish} from "./dish.model";
import {deleteDishAction, createDishAction, updateDishAction} from "./dishes.actions";

@Component({
    selector: 'app-dishes',
    templateUrl: './dishes.component.html',
    styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

    dishes: Dish[];

    newDishName: string;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.store.select(state => state.dishState).subscribe(
            (dishState) => {
                this.dishes = dishState.dishList;
            }
        )
    }

    createDish() {
        this.store.dispatch(createDishAction(this.newDishName));
        this.newDishName = '';
    }

    updateDish(data: any) {
        this.store.dispatch(updateDishAction(data.dish, data.newName));
    }

    deleteDish(dish: Dish) {
        this.store.dispatch(deleteDishAction(dish));
    }

}
