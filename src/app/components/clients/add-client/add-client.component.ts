import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client: Client = {
    nom: '',
    prenom: '',
    status:'',
    adresse: '',
    image: '',
    tel: '',
    email:'',
    ville: ''
  };
  addOperation = true;

  constructor(private founisseurService: ClientService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    if (id == undefined) {
      this.addOperation = true;
    } else {
      this.addOperation = false;
      this.buildClientInfo(id);
    }
  }

  buildClientInfo(id){
    this.founisseurService.getClientById(id).subscribe(client => this.client = client);
  }

  addClient() {
    this.founisseurService.addClient(this.client).subscribe(res => {
      this.router.navigate(['/clients']);
    });
  }

  editClient() {
    this.founisseurService.updateClient(this.client).subscribe(res => {
      this.router.navigate(['/clients']);
    });
  }

}
