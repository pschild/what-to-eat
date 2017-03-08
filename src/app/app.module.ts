import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {WeekPlanComponent} from "./week-plan/week-plan.component";
import {HeaderComponent} from "./header/header.component";
import {DishesModule} from "./dishes/dishes.module";
import {StoreModule} from "@ngrx/store";
import {reducer} from "./shared/reducers";
import {AppEffects} from "./shared/effects";
import {EffectsModule} from "@ngrx/effects";
import {DishService} from "./dishes/dish.service";

@NgModule({
    declarations: [
        AppComponent,
        WeekPlanComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        DishesModule,
        StoreModule.provideStore(reducer),
        EffectsModule.run(AppEffects)
    ],
    providers: [DishService],
    bootstrap: [AppComponent]
})
export class AppModule{ }
