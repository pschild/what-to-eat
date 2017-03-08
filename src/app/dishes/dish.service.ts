import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Dish} from "./dish.model";
import {Observable} from "rxjs";

@Injectable()
export class DishService {

    constructor(private http: Http) {
    }

    getDishes(): Observable<Dish[]> {
        return this.http.get('http://localhost:4200/assets/dishes.json')
            .map((res: Response) => {
                return <Dish[]>res.json();
            });
    }

}
