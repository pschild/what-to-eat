import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from "rxjs";
import {DishService} from "../dishes/dish.service";

import * as actions from '../shared/actions';

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions, private dishService: DishService) { }

    @Effect() getDishesEffects$ = this.actions$
        .ofType(actions.GET_DISHES)
        .switchMap(
            () => this.dishService.getDishes()
                .map(dishesList => actions.getDishesSuccess(dishesList))
                .catch((error) => {
                    return Observable.of(actions.getDishesError(error));
                })
        );

    @Effect() createDishEffects$ = this.actions$
        .ofType(actions.CREATE_DISH)
        .map((action) => action.payload)
        .switchMap(
            (dishName) => this.dishService.createDish({ name: dishName })
                .map(dish => actions.createDishSuccessAction(dish))
                .catch((error) => {
                    return Observable.of(actions.createDishErrorAction(error));
                })
        );

    @Effect() updateDishEffects$ = this.actions$
        .ofType(actions.UPDATE_DISH)
        .map((action) => action.payload)
        .switchMap(
            (data) => this.dishService.updateDish(data)
                .map(dish => actions.updateDishSuccessAction(dish))
                .catch((error) => {
                    return Observable.of(actions.updateDishErrorAction(error));
                })
        );

    @Effect() deleteDishEffects$ = this.actions$
        .ofType(actions.DELETE_DISH)
        .map((action) => action.payload)
        .switchMap(
            (dish) => this.dishService.deleteDish(dish)
            .map(response => actions.deleteDishSuccessAction(response.deletedId))
            .catch((error) => {
                return Observable.of(actions.deleteDishErrorAction(error));
            })
        );
}