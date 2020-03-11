import { Component, OnInit } from '@angular/core';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { Fournisseur } from 'src/app/models/fournisseur';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})
export class ListFournisseurComponent implements OnInit {

  fournisseurs: Fournisseur[] = [];

  constructor(private fournisseurService: FournisseurService) { }

  ngOnInit() {
    this.getFournisseur();
  }
  getFournisseur() {
    this.fournisseurService.findAll().subscribe(fournisseurs => this.fournisseurs = fournisseurs);
  }
  deleteFournisseur(id) {
    this.fournisseurService.deleteFournisseur(id).subscribe(data => this.getFournisseur());
  }

}
