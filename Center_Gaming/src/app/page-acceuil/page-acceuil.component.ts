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
  
  liste_jeux = JEUX.splice(0, 6)
  mouseenter(){
  
    const video = document.querySelector(".vid") as HTMLVideoElement;
    const photo = document.querySelector(".phot") as HTMLElement;
    
    if (video && photo) {
      photo.style.opacity = "0";
      video.play();
    } else {
      console.error("Error:!");
    }
  }
    mouseleave()
    {
      const video = document.querySelector(".vid") as HTMLVideoElement;
      const photo = document.querySelector(".phot") as HTMLElement;
      photo.style.opacity= "";
      video.pause();
    }

  


//      photoJeux() {
      
//    const jeuxdumoment = document.querySelector(".carteJeux"); 

//  for (let i = 0; i < 9; i++) {
//    const div = document.createElement('div');
//    div.classList.add('ListeJeux');

//    const img = document.createElement('img');
//    img.classList.add('photo1');
//    img.src = '/assets/horizon.jpg';
  

//    const video = document.createElement('video');
//    video.classList.add('video1');
//    video.src = '/assets/horizon1.webm';
//    video.loop = true;
//    video.muted = true;

//    div.appendChild(img);
//    div.appendChild(video);

//    jeuxdumoment?.appendChild(div);
//  }
//  }
}






