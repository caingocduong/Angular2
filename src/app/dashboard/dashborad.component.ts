import { Component,OnInit } from '@angular/core';
import { Hero } from '../data/hero';
import { HeroService } from '../service/hero.service';

@Component({
    selector : 'my-dashboard',
    templateUrl : './dashboard.component.html',
    styleUrls : [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit{
    heroes : Hero[] = [];
    constructor(private heroService:HeroService){}

    ngOnInit(): void {
        this.heroService.getHero()
      .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}