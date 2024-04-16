import { Routes } from '@angular/router';
import PageAcceuilComponent from './page-acceuil/page-acceuil.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';

export const routes: Routes = [
    {path : "" , component : PageAcceuilComponent},
    {path: "categories", component: PageCategoriesComponent}
];
