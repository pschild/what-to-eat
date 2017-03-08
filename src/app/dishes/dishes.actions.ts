import { Action } from '@ngrx/store';
import {Dish} from "./dish.model";

export const GET_DISHES = 'GET_DISHES';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const GET_DISHES_ERROR = 'GET_DISHES_ERROR';

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