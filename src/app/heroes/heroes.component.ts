import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //creating a instace when the component is called.
  constructor(private heroService: HeroService) { }

  //when load.
  ngOnInit() {
    this.getHeroes();
  }

  heroes : Hero[];

  selectedHero:Hero;

  //on select menthod to get that secipific user
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

//calling the method from the service, and assigin to this.heroes .
  getHeroes():void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
}
