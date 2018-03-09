import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  constructor(private messageService:MessageService) { }

  getHeroes(): Observable <Hero[]> {
    //when All the heroes are fetched (suscribed) send the message.
    this.messageService.add('HeroService: Fetched All Heroes');
    return of(HEROES);
  }

  getHero(id:number): Observable <Hero> {
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
