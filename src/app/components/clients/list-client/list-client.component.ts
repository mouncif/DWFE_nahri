import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClient();
  }
  getClient() {
    this.clientService.findAll().subscribe(clients=> this.clients = clients);
  }
  deleteClient(id) {
    this.clientService.deleteClient(id).subscribe(data => this.getClient());
  }

}
