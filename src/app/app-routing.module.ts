import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelephonesComponent } from './telephones/telephones.component';
import { AddMarqueComponent } from './add-marque/add-marque.component';
import { UpdateMarqueComponent } from './update-marque/update-marque.component';
import { RechercheParTelephoneComponent } from './recherche-par-telephone/recherche-par-telephone.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';

const routes: Routes = [
  {path : "telephones", component : TelephonesComponent},
  {path : "add-marque", component : AddMarqueComponent},
  {path: "updateMarque/:id", component: UpdateMarqueComponent},
  {path: "rechercheParTelephone", component : RechercheParTelephoneComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  { path: "", redirectTo: "telephones", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
