import { Component, OnInit } from '@angular/core';
import { JEUX } from '../Liste_Jeux';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-panier',
  standalone: true,
  imports: [],
  templateUrl: './page-panier.component.html',
  styleUrl: './page-panier.component.css'
})
export class PagePanierComponent implements OnInit {
  panier = [
    { prix: "43.25€",
      quantite: 1,
      nom: "Dragon Dogma 2",
      plateforme : "Playstation",
      plateformelogo:"./assets/playstation1.jpg",
      image:"./assets/motogp-24-pc-jeu-steam-wallpaper-1-big.jpg",

    }
  ]

  constructor(private router:Router){}
  ngOnInit(): void {
    
  }

}
