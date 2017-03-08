import { Action } from '@ngrx/store';
import {Dish} from "./dish.model";

export const GET_DISHES = 'GET_DISHES';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const GET_DISHES_ERROR = 'GET_DISHES_ERROR';

export const CREATE_DISH = 'CREATE_DISH';
export const CREATE_DISH_SUCCESS = 'CREATE_DISH_SUCCESS';
export const CREATE_DISH_ERROR = 'CREATE_DISH_ERROR';

export const UPDATE_DISH = 'UPDATE_DISH';
export const UPDATE_DISH_SUCCESS = 'UPDATE_DISH_SUCCESS';
export const UPDATE_DISH_ERROR = 'UPDATE_DISH_ERROR';

export const DELETE_DISH = 'DELETE_DISH';
export const DELETE_DISH_SUCCESS = 'DELETE_DISH_SUCCESS';
export const DELETE_DISH_ERROR = 'DELETE_DISH_ERROR';

export function getDishes(): Action {
    return {
        type: GET_DISHES
    };
}

export function getDishesSuccess(dishesList: Dish[]): Action {
    return {
        type: GET_DISHES_SUCCESS,
        payload: dishesList
    };
}

export function getDishesError(error: any): Action {
    return {
        type: GET_DISHES_ERROR,
        payload: error
    };
}

export function createDishAction(dishName: string): Action {
    return {
        type: CREATE_DISH,
        payload: dishName
    };
}

export function createDishSuccessAction(dish: Dish): Action {
    return {
        type: CREATE_DISH_SUCCESS,
        payload: dish
    };
}

export function createDishErrorAction(error: any): Action {
    return {
        type: CREATE_DISH_ERROR,
        payload: error
    };
}

export function updateDishAction(dish: Dish, newName: string): Action {
    return {
        type: UPDATE_DISH,
        payload: {
            dish: dish,
            newName: newName
        }
    };
}

export function updateDishSuccessAction(dish: Dish): Action {
    return {
        type: UPDATE_DISH_SUCCESS,
        payload: dish
    };
}

export function updateDishErrorAction(error: any): Action {
    return {
        type: UPDATE_DISH_ERROR,
        payload: error
    };
}

export function deleteDishAction(dish: Dish): Action {
    return {
        type: DELETE_DISH,
        payload: dish
    };
}

export function deleteDishSuccessAction(deletedDishId: number): Action {
    return {
        type: DELETE_DISH_SUCCESS,
        payload: deletedDishId
    };
}

export function deleteDishErrorAction(error: any): Action {
    return {
        type: DELETE_DISH_ERROR,
        payload: error
    };
}