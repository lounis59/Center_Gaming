import { Routes } from '@angular/router';
import PageAcceuilComponent from './page-acceuil/page-acceuil.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';
import { PageJeuxComponent } from './page-jeux/page-jeux.component';
import { PageActionComponent } from './page-action/page-action.component';
import { PagePanierComponent } from './page-panier/page-panier.component';
export const routes: Routes = [
    {path : "" , component : PageAcceuilComponent},
    {path: "categories", component: PageCategoriesComponent},
    {path: "page-jeux/:id",component: PageJeuxComponent},
    {path: "action", component: PageActionComponent},
    {path: "Panier", component: PagePanierComponent},
];
