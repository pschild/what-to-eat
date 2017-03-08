import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {WeekPlanComponent} from "./week-plan/week-plan.component";
import {DishesComponent} from "./dishes/dishes.component";

const routes: Routes = [
    { path: '', redirectTo: '/weekplan', pathMatch: 'full' },
    { path: 'weekplan', component: WeekPlanComponent },
    { path: 'dishes', component: DishesComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
