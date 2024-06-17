import { Component } from '@angular/core';


@Component({
  selector: 'app-page-inscription',
  standalone: true,
  imports: [],
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.css'
})
export class PageInscriptionComponent {
  private url = "http://localhost:8085/user";
  
  constructor(){
    fetch(this.url).then()
  }

}
