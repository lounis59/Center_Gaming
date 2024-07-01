import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-page-mon-compte',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './page-mon-compte.component.html',
  styleUrl: './page-mon-compte.component.css'
})
export class PageMonCompteComponent {
  private url = "http://localhost:8085/user";
  errorEmail = "";
  errorPassword = "";
  errorPasswordBis = "";

  constructor(private router:Router){}

  submit(forms : HTMLFormElement){

    
  }
}
