import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProduitsComponent } from './components/produits/list-produits/list-produits.component';
import { AddProduitComponent } from './components/produits/add-produit/add-produit.component';


const routes: Routes = [
  { path: '', redirectTo: '/produits', pathMatch: 'full'},
  { path: 'produits', component: ListProduitsComponent },
  { path: 'add-produit', component: AddProduitComponent },
  { path: 'update-produit/:id', component: AddProduitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
