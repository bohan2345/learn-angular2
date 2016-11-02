/**
 * Every Angular application has at least one component: the root component, named AppComponent here.
 *
 * Components are the basic building blocks of Angular applications. A component controls a portion of
 * the screen (a view) through its associated template.
 *
 * Created by bohan on 11/1/16.
 */

import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    template: `
        <h1>{{title}}</h1>
            <nav>
                <a routerLink="/dashboard">Dashboard</a>
                <a routerLink="/heroes">Heroes</a>
            </nav>
        <!-- The router displays each component immediately below the <router-outlet>
         as we navigate through the application. -->
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Tour of heroes';
}
