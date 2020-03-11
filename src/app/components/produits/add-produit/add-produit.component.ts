import { Component, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  produit: Produit = {
    nom: '',
    nomCourt: '',
    prixBase:0,
    prixVente: 0,
    qteActuel: 0,
    qteInit: 0,
    seuilMax: 0,
    unite: 0
  };
  addOperation = true;

  constructor(private produitService: ProduitService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if (id == undefined) {
      this.addOperation = true;
    } else {
      this.addOperation = false;
      this.buildProduitInfo(id);
    }
  }

  buildProduitInfo(id){
    this.produitService.getProduitById(id).subscribe(produit => this.produit = produit);
  }

  addProduit() {
    this.produitService.addProduit(this.produit).subscribe(res => {
      this.router.navigate(['/produits']);
    });
  }

  editProduit() {
    this.produitService.updateProduit(this.produit).subscribe(res => {
      this.router.navigate(['/produits']);
    });
  }

}
