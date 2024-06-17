import { Component } from '@angular/core';
import { JEUX } from '../Liste_Jeux';
import { Jeux } from '../Jeux';
import { Router } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-page-action',
  standalone: true,
  imports: [],
  templateUrl: './page-action.component.html',
  styleUrl: './page-action.component.css'
})
export class PageActionComponent {

  jeux?:Jeux 

  liste_jeux = [...JEUX]
  constructor(private router:Router , private gameservice: GameService  ){
    this.filterGames();
  }
  filterGames() {
    this.liste_jeux = this.liste_jeux.filter(game => game.genre.includes(this.gameservice.chosenGenre));
  }
  mouseenter(photo: HTMLImageElement , prix? : HTMLElement, video?: HTMLVideoElement, promo?:HTMLElement )

  {

    if(prix)
      prix.style.opacity = "0";
    if(promo)
      promo.style.opacity = "0"
    if (video && photo) {
      
      photo.style.opacity = "0";
      video.style.scale = "1.075";
      


      video.play();
    } else {
      console.error("Error:!");
    }
  }
    mouseleave(photo: HTMLImageElement, prix? : HTMLElement, video?: HTMLVideoElement,promo?:HTMLElement)
    {
      photo.style.opacity= "";
    
      if(promo)
        promo.style.opacity = ""
      if(prix)
      prix.style.opacity = "";
      if(video){
        video.style.scale = "";
        video.pause();
      }

    }
    goToGamePage(id:number){
      this.router.navigate(["page-jeux",id])
    }

    
}

console.log([...JEUX][0].genre);
 // liste_jeux = [[...JEUX][0],[...JEUX][26]]
  // liste_jeux = [...JEUX].splice(0,20)


