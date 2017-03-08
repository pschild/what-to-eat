import {Component, OnInit, Input} from '@angular/core';
import {Dish} from "../dish.model";

@Component({
    selector: 'app-dish-list',
    templateUrl: 'dish-list.component.html',
    styleUrls: ['dish-list.component.css']
})
export class DishListComponent implements OnInit {

    @Input() dishes: Dish[];

    constructor() { }

    ngOnInit() {
    }

}
