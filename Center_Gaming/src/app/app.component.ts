import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterCenterGamingComponent } from './footer-center-gaming/footer-center-gaming.component';
import { JEUX } from './Liste_Jeux';
import { Jeux } from './Jeux';
import { GameService } from '../app/game.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterCenterGamingComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private gameservice: GameService){}

  liste_jeux = JEUX
  genre = document.body.querySelector('.genre')
  liste_Genre:string[] = ["action","arcade","aventure","fps","jeux solo","rpg","Free to Play","Sport","Strategie"];
  liste_Plateform:string[] = ["pc","xbox","ps5"];
  defaultTemplate = true;
  Listepageblank = ["/Panier"];
  isLogged = false
  
  ngOnInit(): void {
    this.backgroundJeux()
    this.router.events.subscribe(e=>{
      if (e instanceof NavigationEnd)
      {
        this.defaultTemplate = !this.Listepageblank.includes(e.url);
        this.isLogged = localStorage.getItem("isLoggedIn") === "true"
        
      }
    })
  }
  title = 'Center_Gaming';
  background:string = ""
  query: string = '';
  backgroundJeux(){
    const listeJeux = JEUX
    const imageAleatoire = listeJeux[Math.floor(Math.random()*listeJeux.length)].image[0]
    this.background = imageAleatoire
    console.log(imageAleatoire)
  }
  sizeSeach($event : Event,element : HTMLElement,logo:HTMLElement){
    if($event.target instanceof HTMLInputElement)return
    // const logo = element.querySelector('svg')
    const input = element.querySelector('input')
    if(element.style.width === ""){
    element.style.width = '100%'
    element.style.borderRadius = '30px'
    element.style.transition = 'width 0.5s'
    if(input){
      input.style.display = 'block'
      input.style.height = '95%'

    }
    if(logo){
      logo.style.display = 'none'

    }
  }else{
    element.style.borderRadius = ''
    element.style.width = ''
    element.style.transition = 'border-radius 1s'
    if(logo){
      logo.style.display = ""
    }
    if(input){

      input.style.display = ''
    }
  }

  }
  genreView(element:HTMLElement){
    if(element?.style.maxHeight === ""){
      element.style.maxHeight = '200px'
      element.style.transition = '0.8s'
    }else{
      element.style.maxHeight = ''
    }
    console.log(element);
    
  }
  goToCat()
  {
    this.router.navigate(["categories"]);
  }
  goToHome()
  {
    this.router.navigate([""]);
  }
  goToUserAcont(){
    this.router.navigate(["page-mon-compte"])
  }
  goToInscription(){
    this.router.navigate(["page-inscription"])
  }
  goToCart(){
    this.router.navigate(["panier"])
  }
  goToPlateform(plateform: string)
  {
    this.gameservice.chosenPlateform=plateform
    this.router.navigate(["plateform"])
  }
  goToSearch() {
    if (this.query.trim() !== '') {
      this.router.navigate(['/recherche'], { queryParams: { q: this.query } });
    }
  }

}
