/**
 * This is the entry point to your application.
 * Created by bohan on 10/15/16.
 */

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from "./heroes.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {AppComponent} from "./app.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashBoardComponent} from "./dashboard.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        // We use the forRoot method because we're providing a configured router at the root of the application.
        // The forRoot method gives us the Router service providers and directives needed for routing,
        // and performs the initial navigation based on the current browser URL.
        RouterModule.forRoot([
            {
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'heroes',
                component: HeroesComponent
            }, {
                path: 'dashboard',
                component: DashBoardComponent
            }
        ])
    ],
    declarations: [
        // Add declarable classes — components, directives, and pipes — to a declarations list.
        // These classes must be declared in exactly one module of the application.
        // Declare them in this module if they belong to this module.
        AppComponent,
        DashBoardComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    bootstrap: [
        //entry component
        AppComponent
    ],
    providers: [
        //register HeroService for injection (register dependency)
        HeroService
    ]
})
export class AppModule {
}