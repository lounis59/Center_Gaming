import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-page-categories',
  standalone: true,
  imports: [],
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.css'
})
export class PageCategoriesComponent {

  constructor(private router: Router, private gameservice: GameService){}
  Action()
  {
    this.gameservice.chosenGenre= "action"
    this.router.navigate(["genre"]);
  }
  arcade()
  {
    this.gameservice.chosenGenre="arcade"
    this.router.navigate(["genre"]);
  }
  aventure()
  {
    this.gameservice.chosenGenre="aventure"
    this.router.navigate(["genre"]);
  }
  fps()
  {
    this.gameservice.chosenGenre="fps"
    this.router.navigate(["genre"]);
  }
  solo()
  {
    this.gameservice.chosenGenre="jeux solo"
    this.router.navigate(["genre"]);
  }
  rpg()
  {
    this.gameservice.chosenGenre="rpg"
    this.router.navigate(["genre"]);
  }
  free(){
    this.gameservice.chosenGenre="free to play"
    this.router.navigate(["genre"]);
  }
  sport(){
    this.gameservice.chosenGenre="sport"
    this.router.navigate(["genre"]);
  }
  strat(){
    this.gameservice.chosenGenre="strategie"
    this.router.navigate(["genre"]);
  }
  
  
}
