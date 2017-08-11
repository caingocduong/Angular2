import { Hero } from '../data/hero';
import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock-heroes';

@Injectable()
export class HeroService{
    getHero() : Promise<Hero[]> {
        return Promise.resolve(HEROES);
    };
    getHeroSlowly() : Promise<Hero[]> {
        return new Promise(resolve =>{
            setTimeout(() => resolve(this.getHero()) , 2000);
        });
    }
    getHeroById(id : number) : Promise<Hero>{
        return this.getHero().then(heroes => heroes.find(hero => hero.id === id));
    }
}