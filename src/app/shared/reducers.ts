import { combineReducers } from '@ngrx/store';
import * as fromDishes from '../dishes/dishes.reducers';

export interface AppState {
    dishState: fromDishes.DishState;
}

const reducers = {
    dishState: fromDishes.DishesReducer
};

const combined = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return combined(state, action);
}