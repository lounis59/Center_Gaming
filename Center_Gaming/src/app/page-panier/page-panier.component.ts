import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jeux } from '../Jeux';
import { CommonModule } from '@angular/common';
import { JEUX } from '../Liste_Jeux';

@Component({
  selector: 'app-page-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-panier.component.html',
  styleUrls: ['./page-panier.component.css'], // Assurez-vous que ce soit `styleUrls` et non `styleUrl`
})
export class PagePanierComponent implements OnInit {
  private url = 'http://localhost:8085/cart';
  Liste_Jeux = JEUX;

  panier: Jeux[] = []; // Initialisé en tant que tableau vide

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadPanier();
  }

  loadPanier(): void {
    fetch(this.url, {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          console.log('Panier récupéré:', data);
          // Filtrer les jeux qui existent dans le panier
          this.panier = this.Liste_Jeux.filter(jeux => data.includes(jeux.id));
          
          
        } else {
          console.error('Le panier est vide ou a une structure inattendue.');
        }
      })
      .catch(error => console.error('Erreur lors de la récupération du panier:', error));
  }

  deleteFromPanier(id: number): void {
    fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        console.log('Produit supprimé avec succès');
        // Mettre à jour le panier localement
        this.panier = this.panier.filter(jeu => jeu.id !== id);
      } else {
        console.error('Erreur:', data.message);
        console.log(data)
      }
    })
    .catch(error => console.error('Erreur:', error));
  }
}
