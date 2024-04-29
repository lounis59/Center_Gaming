import { Routes } from '@angular/router';
import PageAcceuilComponent from './page-acceuil/page-acceuil.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';
import { PageJeuxComponent } from './page-jeux/page-jeux.component';
import { PageActionComponent } from './page-action/page-action.component';
<<<<<<< HEAD
import { PagePanierComponent } from './page-panier/page-panier.component';
=======
import { PageMonCompteComponent } from './page-mon-compte/page-mon-compte.component';

>>>>>>> 032c81decde0709db3ae4c80d1ad13294fa1cd29
export const routes: Routes = [
    {path : "" , component : PageAcceuilComponent},
    {path: "categories", component: PageCategoriesComponent},
    {path: "page-jeux/:id",component: PageJeuxComponent},
<<<<<<< HEAD
    {path: "action", component: PageActionComponent},
    {path: "Panier", component: PagePanierComponent},
=======
    {path: "page-mon-compte",component: PageMonCompteComponent},
    {path: "action", component: PageActionComponent}
>>>>>>> 032c81decde0709db3ae4c80d1ad13294fa1cd29
];
