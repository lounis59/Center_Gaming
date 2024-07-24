import { Component, OnInit } from '@angular/core';
import { JEUX } from '../Liste_Jeux';
import { Router } from '@angular/router';
import { Jeux } from '../Jeux';

@Component({
  selector: 'app-page-panier',
  standalone: true,
  imports: [],
  templateUrl: './page-panier.component.html',
  styleUrl: './page-panier.component.css',
})
export class PagePanierComponent implements OnInit {
  private url = 'http://localhost:8085/cart';
  Liste_Jeux = JEUX;

  panier: Jeux[] = [
    // { prix: "43.25€",
    //   quantite: 1,
    //   nom: "Dragon Dogma 2",
    //   plateforme : "Playstation",
    //   plateformelogo:"./assets/playstation1.jpg",
    //   image:"./assets/motogp-24-pc-jeu-steam-wallpaper-1-big.jpg",
    // }
  ];

  constructor(private router: Router) {}
  ngOnInit(): void {
    fetch(this.url, {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          console.log(data);
          this.panier = this.Liste_Jeux.filter((jeux) => {
            if (data.includes(jeux.id)) {
              return jeux;
            }
            return;
          });
        } else {
          console.error('le Panier est vide');
        }
      });
  }
}
