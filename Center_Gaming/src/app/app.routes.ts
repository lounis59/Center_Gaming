import { Routes } from '@angular/router';
import PageAcceuilComponent from './page-acceuil/page-acceuil.component';
import { PageCategoriesComponent } from './page-categories/page-categories.component';
<<<<<<< HEAD
import { PageJeuxComponent } from './page-jeux/page-jeux.component';
=======
import { PageActionComponent } from './page-action/page-action.component';
>>>>>>> 4f747f47224b6c7a469943a7e8420051908379eb

export const routes: Routes = [
    {path : "" , component : PageAcceuilComponent},
    {path: "categories", component: PageCategoriesComponent},
<<<<<<< HEAD
    {path: "page-jeux/:id",component: PageJeuxComponent}
=======
    {path: "action", component: PageActionComponent}
>>>>>>> 4f747f47224b6c7a469943a7e8420051908379eb
];
