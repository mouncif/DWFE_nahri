import { Component, OnInit } from '@angular/core';
import { Fournisseur } from 'src/app/models/fournisseur';
import { FournisseurService } from 'src/app/services/fournisseur.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})

export class AddFournisseurComponent implements OnInit {

  fournisseur: Fournisseur = {
    nom: '',
    nomCourt: '',
    ville:'',
    adresse: '',
    telFix: '',
    telMob: '',
    fax: '',
    mail: ''
  };
  addOperation = true;

  constructor(private founisseurService: FournisseurService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if (id == undefined) {
      this.addOperation = true;
    } else {
      this.addOperation = false;
      this.buildFournisseurInfo(id);
    }
  }

  buildFournisseurInfo(id){
    this.founisseurService.getFournisseurById(id).subscribe(fournisseur => this.fournisseur = fournisseur);
  }

  addFournisseur() {
    this.founisseurService.addFournisseur(this.fournisseur).subscribe(res => {
      this.router.navigate(['/fournisseurs']);
    });
  }

  editFournisseur() {
    this.founisseurService.updateFournisseur(this.fournisseur).subscribe(res => {
      this.router.navigate(['/fournisseurs']);
    });
  }

}
