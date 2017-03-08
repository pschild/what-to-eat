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

        case DishesActions.GET_DISHES_ERROR:
            console.error('Error while getting dishes...');
            return state;

        case DishesActions.CREATE_DISH:
            return state;

        case DishesActions.CREATE_DISH_SUCCESS:
            newState = Object.assign({}, state);
            newState.dishList.push(action.payload);
            newState.isDishListLoaded = true;
            return newState;

        case DishesActions.CREATE_DISH_ERROR:
            console.error('Error while creating dish...');
            return state;

        case DishesActions.UPDATE_DISH:
            return state;

        case DishesActions.UPDATE_DISH_SUCCESS:
            newState = Object.assign({}, state);
            newState.dishList.map(dish => {
                if (dish.id === action.payload.id) {
                    return Object.assign({}, dish, action.payload);
                }
                return dish;
            });
            newState.isDishListLoaded = true;
            return newState;

        case DishesActions.UPDATE_DISH_ERROR:
            console.error('Error while updating dish...');
            return state;

        case DishesActions.DELETE_DISH:
            return state;

        case DishesActions.DELETE_DISH_SUCCESS:
            newState = Object.assign({}, state);
            newState.dishList = newState.dishList.filter(dish => {
                return dish.id !== action.payload;
            });
            return newState;

        case DishesActions.DELETE_DISH_ERROR:
            console.error('Error while deleting a dish...');
            return state;

        default:
            return state;
    }
};