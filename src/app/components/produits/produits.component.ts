import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits:Produit[]=[];
  myproduit:Produit={
    
    nom: "",
    nom_court:"",
    prix_b: 0,
    prix_v: 0,
    seuil_max:0,
    unite:0,
    quantite_ini:0, 
    quantite_act:0 

  };

  constructor(private produitService:ProduitService) { }


  ngOnInit() { this.getproduit();
  }
  getproduit(){
    this.produitService.findAll().subscribe(
      produits => this.produits = produits)
  }
 deleteProduit(id){
    this.produitService.delete(id).subscribe(data => this.getproduit())
  }
 
  addProduit(){
    this.produitService.add(this.myproduit).subscribe(data => {
      this.myproduit.nom = ""; 
      this.myproduit.prix_b= 0;
      this.myproduit.prix_v= 0;
      this.myproduit.seuil_max= 0;
      this.myproduit.unite= 0;
      this.myproduit.quantite_ini= 0;
      this.myproduit.quantite_act= 0;



      this.getproduit();
    });
  }
  updateProduit(){
    this.produitService.update(this.myproduit).subscribe(data => {
      this.myproduit.nom = ""; 
      this.myproduit.prix_b= 0;
      this.myproduit.prix_v= 0;
      this.myproduit.seuil_max= 0;
      this.myproduit.unite= 0;
      this.myproduit.quantite_ini= 0;
      this.myproduit.quantite_act= 0;
      this.getproduit();
    });

  }

}
