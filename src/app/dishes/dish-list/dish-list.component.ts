import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Dish} from "../dish.model";

@Component({
    selector: 'app-dish-list',
    templateUrl: 'dish-list.component.html',
    styleUrls: ['dish-list.component.css']
})
export class DishListComponent {

    @Input() dishes: Dish[];

    @Output() deleteDishEvent = new EventEmitter();
    @Output() updateDishEvent = new EventEmitter();

    constructor() { }

    handleDeleteDishClicked(dish: Dish) {
        this.deleteDishEvent.emit(dish);
    }

    updateDish(dish: Dish, newName: string) {
        this.updateDishEvent.emit({
            dish: dish,
            newName: newName
        });
    }

}
