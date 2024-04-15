import { Component } from '@angular/core';
import { JEUX } from '../Liste_Jeux';

@Component({
  selector: 'app-page-acceuil',
  standalone: true,
  imports: [],
  templateUrl: './page-acceuil.component.html',
  styleUrl: './page-acceuil.component.css'
})
export class PageAcceuilComponent {
  liste_jeux = JEUX
}
