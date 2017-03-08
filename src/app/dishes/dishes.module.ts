import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DishesComponent} from "./dishes.component";
import {DishListComponent} from "./dish-list/dish-list.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DishesComponent,
        DishListComponent
    ]
})
export class DishesModule {
}
