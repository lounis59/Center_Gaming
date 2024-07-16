import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-page-mon-compte',
  standalone: true,
  imports: [RouterLink, FormsModule,CommonModule],
  templateUrl: './page-mon-compte.component.html',
  styleUrls: ['./page-mon-compte.component.css']
})
export class PageMonCompteComponent implements OnInit {
  private url = "http://localhost:8085/login";
  errorEmail = "";
  errorPassword = "";
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkSession();
  }

  checkSession() {
    fetch(this.url, {
      method: "GET",
      credentials: "include"
    }).then((response) => response.json())
      .then((data) => {
        this.isLoggedIn = data.logged;
      })
      .catch(e => {
        console.error('Erreur lors de la vérification de la session', e);
      });
  }

  submit(form: HTMLFormElement) {
    this.errorEmail = "";
    this.errorPassword = "";

    const formData = new FormData(form);

    fetch(this.url, {
      method: "POST",
      body: formData,
      credentials: "include"
    }).then((response) => {
      response.json().then((data) => {
        if (data.status === 201) {
          this.isLoggedIn = true;
          this.router.navigate(["/"]);
        } else {
          if (data.data && Array.isArray(data.data.violations)) {
            for (const error of data.data.violations) {
              switch (error.propertyPath) {
                case "email":
                  this.errorEmail = error.message;
                  break;
                case "password":
                  this.errorPassword = error.message;
                  break;
              }
            }
          } else {
            console.error('Les violations ne sont pas dans le format attendu ou n\'existent pas.');
          }
        }
      }).catch(e => {
        console.error('Erreur lors du parsing JSON', e);
      });
    }).catch(e => {
      console.error('Erreur réseau ou autre', e);
    });
  }

  logout() {
    fetch(this.url + '/logout', {
      method: "POST",
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      if (response.ok) {
        this.isLoggedIn = false;
        this.router.navigate(["/login"]);
      }
    }).catch(e => {
      console.error('Erreur lors de la déconnexion', e);
    });
  }
}
