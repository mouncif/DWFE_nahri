import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProduitsComponent } from './components/produits/list-produits/list-produits.component';
import { AddProduitComponent } from './components/produits/add-produit/add-produit.component';
import { ListFournisseurComponent } from './components/fournisseurs/list-fournisseur/list-fournisseur.component';
import { AddFournisseurComponent } from './components/fournisseurs/add-fournisseur/add-fournisseur.component';
import { ListClientComponent } from './components/clients/list-client/list-client.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';



const routes: Routes = [
  { path: '', redirectTo: '/produits', pathMatch: 'full'},
  { path: 'produits', component: ListProduitsComponent },
  { path: 'add-produit', component: AddProduitComponent },
  { path: 'update-produit/:id', component: AddProduitComponent },
  { path: 'fournisseurs', component: ListFournisseurComponent },
  { path: 'add-fournisseur', component: AddFournisseurComponent },
  { path: 'update-fournisseur/:id', component: AddFournisseurComponent },
  { path: 'clients', component: ListClientComponent },
  { path: 'add-client', component: AddClientComponent },
  { path: 'update-client/:id', component: AddClientComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'update-user/:id', component: AddUserComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
