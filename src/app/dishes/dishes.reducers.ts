import {Dish} from "./dish.model";
import * as DishesActions from './dishes.actions';
import {ActionReducer, Action} from "@ngrx/store";

export interface DishState {
    dishList: Dish[];
    isDishListLoaded: boolean;
}

const initialDishState: DishState = {
    dishList: [],
    isDishListLoaded: false,
};

export const DishesReducer: ActionReducer<DishState> = (state = initialDishState, action: Action) => {
    let newState;
    switch (action.type) {
        case DishesActions.GET_DISHES:
            return initialDishState;

        case DishesActions.GET_DISHES_SUCCESS:
            newState = Object.assign({}, state);
            newState.dishList = action.payload;
            newState.isDishListLoaded = true;
            return newState;
        default:
            return state;
    }
};