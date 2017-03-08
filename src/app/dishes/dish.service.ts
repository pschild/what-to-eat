import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Dish} from "./dish.model";
import {Observable} from "rxjs";

const BASE_URL = 'http://localhost:8081';

@Injectable()
export class DishService {

    constructor(private http: Http) {
    }

    getDishes(): Observable<Dish[]> {
        return this.http.get(BASE_URL + '/dishes')
            .map(res => <Dish[]>res.json());
    }

    createDish(data: any): Observable<Dish> {
        return this.http.post(BASE_URL + '/dish', data)
            .map(res => <Dish>res.json());
    }

    updateDish(data: any): Observable<Dish> {
        return this.http.put(BASE_URL + `/dish/${data.dish.id}`, { name: data.newName })
            .map(res => <Dish>res.json());
    }

    deleteDish(dish: Dish) {
        return this.http.delete(BASE_URL + `/dish/${dish.id}`)
            .map(res => res.json());
    }

}
