import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DishesComponent} from "./dishes.component";
import {DishListComponent} from "./dish-list/dish-list.component";
import {InlineEditComponent} from "../inline-edit/inline-edit.component";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        DishesComponent,
        DishListComponent,
        InlineEditComponent
    ]
})
export class DishesModule {
}
