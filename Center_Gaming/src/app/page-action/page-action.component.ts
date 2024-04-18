import { Component } from '@angular/core';
import { JEUX } from '../Liste_Jeux';

@Component({
  selector: 'app-page-action',
  standalone: true,
  imports: [],
  templateUrl: './page-action.component.html',
  styleUrl: './page-action.component.css'
})
export class PageActionComponent {

  nb_jeux =[]
  liste_jeux = JEUX.splice(0, 21)
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
    mouseleave(photo: HTMLImageElement, video: HTMLVideoElement, prix : HTMLElement)
    {
      photo.style.opacity= "";
      prix.style.opacity = "";
      video.style.scale = "";
      video.pause();
    }

}
