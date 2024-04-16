import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterCenterGamingComponent } from './footer-center-gaming/footer-center-gaming.component';
import { JEUX } from './Liste_Jeux';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterCenterGamingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.backgroundJeux()
  }
  title = 'Center_Gaming';
  background:string = ""
  backgroundJeux(){
    const listeJeux = JEUX
    const imageAleatoire = listeJeux[Math.floor(Math.random()*listeJeux.length)].image[0]
    this.background = imageAleatoire
    console.log(imageAleatoire)
  }

}
