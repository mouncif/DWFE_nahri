import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
  produits: Produit[] = [];

  constructor(private produitService: ProduitService) { }

  ngOnInit() {
    this.getProduits();
  }
  getProduits() {
    this.produitService.findAll().subscribe(produits => this.produits = produits);
  }
  deleteProduit(id) {
    this.produitService.deleteProduit(id).subscribe(data => this.getProduits());
  }

}
