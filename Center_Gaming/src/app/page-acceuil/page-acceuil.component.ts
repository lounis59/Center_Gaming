import { Component } from '@angular/core';
import { JEUX } from '../Liste_Jeux';

@Component({
  selector: 'app-page-acceuil',
  standalone: true,
  imports: [],
  templateUrl: './page-acceuil.component.html',
  styleUrl: './page-acceuil.component.css'
})
export default class PageAcceuilComponent {
  
  liste_jeux = JEUX.splice(0, 9)
  mouseenter(photo: HTMLImageElement, video: HTMLVideoElement){
  
    
    if (video && photo) {
      photo.style.opacity = "0";
      video.play();
    } else {
      console.error("Error:!");
    }
  }
    mouseleave(photo: HTMLImageElement, video: HTMLVideoElement)
    {
      photo.style.opacity= "";
      video.pause();
    }
}






