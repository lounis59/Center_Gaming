import { Routes } from '@angular/router';
import PageAcceuilComponent from './page-acceuil/page-acceuil.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';
import { PageJeuxComponent } from './page-jeux/page-jeux.component';
import { PageActionComponent } from './page-genre/page-genre.component';
import { PagePanierComponent } from './page-panier/page-panier.component';
import { PageMonCompteComponent } from './page-mon-compte/page-mon-compte.component';
import { PageInscriptionComponent } from './page-inscription/page-inscription.component';

export const routes: Routes = [
    {path : "" , component : PageAcceuilComponent},
    {path: "categories", component: PageCategoriesComponent},
    {path: "page-jeux/:id",component: PageJeuxComponent},
    {path: "Panier", component: PagePanierComponent},
    {path: "page-mon-compte",component: PageMonCompteComponent},
    {path: "page-inscription",component: PageInscriptionComponent},
    {path: "genre", component: PageActionComponent}
];
