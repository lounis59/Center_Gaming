import { Component } from '@angular/core';
import { JEUX } from '../Liste_Jeux';

import { Router } from '@angular/router';

@Component({
  selector: 'app-page-action',
  standalone: true,
  imports: [],
  templateUrl: './page-action.component.html',
  styleUrl: './page-action.component.css'
})
export class PageActionComponent {


  liste_jeux = [...JEUX].splice(0,20)

  // for (const index in liste_jeux:string) {
  //   console.log(liste_jeux[index])
  // }

  // liste_jeux = [[...JEUX][0],[...JEUX][2]]
  // liste_jeux = [...JEUX].splice(0,20)
  
  

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
    mouseleave(photo: HTMLImageElement, video: HTMLVideoElement, prix : HTMLElement)
    {
      photo.style.opacity= "";
      prix.style.opacity = "";
      video.style.scale = "";
      video.pause();
    }
    goToGamePage(id:number){
      this.router.navigate(["page-jeux",id])
    }

    
}
console.log([...JEUX][0].genre);

