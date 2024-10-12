import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { JEUX } from '../Liste_Jeux';

@Component({
  selector: 'app-page-recherche',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-recherche.component.html',
  styleUrls: ['./page-recherche.component.css']
})
export class PageRechercheComponent {
  liste_jeux = [...JEUX]; 
  query: string = ''; 
  filteredJeux: any[] = []; 

  constructor(private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['q']) {
        this.query = params['q'];
        this.filterJeux();
      }
    });
  }

  filterJeux() {
    const queryLower = this.query.toLowerCase().trim();
    this.filteredJeux = this.liste_jeux.filter(jeu =>
      jeu.titre.toLowerCase().includes(queryLower)
    );
  }

  

  // Définir la méthode trackByFn
  trackByFn(index: number, jeu: any): number {
    return jeu.id; // Renvoie l'identifiant unique de chaque jeu
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
