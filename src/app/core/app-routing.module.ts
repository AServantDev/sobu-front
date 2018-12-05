import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConnectionComponent } from "../connection/connection.component";
import { InscriptionComponent } from "../inscription/inscription.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { WarningComponent } from "../warning/warning.component";
import { ProgramScreenComponent } from "../program-screen/program-screen.component";
import { ProfilComponent } from "../profil/profil.component";
import { FoodListComponent } from "../food-list/food-list.component";

const routes: Routes = [
  {
    path: "connexion",
    component: ConnectionComponent
  },
  {
    path: "inscription",
    component: InscriptionComponent
  },
  {
    path: "home",
    component: WarningComponent
  },
  {
    path: "programs",
    component: ProgramScreenComponent
  },
  {
    path: "profil",
    component: ProfilComponent
  },
  {
    path: "food",
    component: FoodListComponent
  },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  {
    path: "**",
    component: PageNotFoundComponent
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
