import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categories',
  standalone: true,
  imports: [],
  templateUrl: './page-categories.component.html',
  styleUrl: './page-categories.component.css'
})
export class PageCategoriesComponent {

  constructor(private router: Router){}
  goToAction()
  {
    this.router.navigate([""]);
  }
}
