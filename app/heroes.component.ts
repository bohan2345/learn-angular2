/**
 * Created by bohan on 10/15/16.
 */
import {Component, OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";

@Component({
    selector: 'my-heroes',
    template: `
        <selected-hero [hero]="selectedHero"></selected-hero>
        <h2>My Heroes</h2>
        <ul class="heroes">
          <li *ngFor="let hero of heroes"
           [class.selected]="hero === selectedHero"
           (click)="onSelect(hero)">
          <!-- each hero goes here -->
              <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
    `
})
export class HeroesComponent implements OnInit {
    selectedHero: Hero;
    heroes: Hero[];

    constructor(private heroService: HeroService) {
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }
}