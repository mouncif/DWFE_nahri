import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule}  from '@angular/forms';
import { ListProduitsComponent } from './components/produits/list-produits/list-produits.component';
import { AddProduitComponent } from './components/produits/add-produit/add-produit.component';
import { ListFournisseurComponent } from './components/fournisseurs/list-fournisseur/list-fournisseur.component';
import { AddFournisseurComponent } from './components/fournisseurs/add-fournisseur/add-fournisseur.component';

import { ListClientComponent } from './components/clients/list-client/list-client.component';
import { AddClientComponent } from './components/clients/add-client/add-client.component';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
  
    ListProduitsComponent,
    AddProduitComponent,
    ListFournisseurComponent,
    AddFournisseurComponent,
    
    ListClientComponent,
    
    AddClientComponent,
    
    ListUsersComponent,
    
    AddUserComponent,
    
    NavbarComponent,
    
    SidebarComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
