import { Component } from '@angular/core';
import { JEUX } from '../Liste_Jeux';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-acceuil',
  standalone: true,
  imports: [],
  templateUrl: './page-acceuil.component.html',
  styleUrl: './page-acceuil.component.css'
})
export default class PageAcceuilComponent {
  
  liste_jeux = [...JEUX].splice(0, 9)
<<<<<<< HEAD
  liste_Promo = [...JEUX].splice (7, 12)
  mouseenter(photo: HTMLImageElement , prix : HTMLElement, video?: HTMLVideoElement )
  constructor(private router:Router){}
  mouseenter(photo: HTMLImageElement, video: HTMLVideoElement , prix : HTMLElement )
  
  {
  
    
    if (video && photo && prix) {
      photo.style.opacity = "0";
      prix.style.opacity = "0";
      video.style.scale = "1.075"


      video.play();
    } else {
      console.error("Error:!");
    }
  }
    mouseleave(photo: HTMLImageElement, prix : HTMLElement, video?: HTMLVideoElement)
    {
      photo.style.opacity= "";
      prix.style.opacity = "";
      if(video){
        video.style.scale = "";
        video.pause();
      }
      
    }
 promo (){}
    goToGamePage(id:number){
      this.router.navigate(["page-jeux",id])
    }
}


 




