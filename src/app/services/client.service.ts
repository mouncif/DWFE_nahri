import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {


  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<[Client]>(" http://localhost:3000/clients");
  }
  deleteClient(id) {
    return this.http.delete(`http://localhost:3000/clients/${id}`);
  }
  addClient(client) {
    return this.http.post("http://localhost:3000/clients", client);
  }
  updateClient(client) {
    return this.http.put(`http://localhost:3000/clients/${client.id}`, client);
  }
  getClientById(id: any) {
    return this.http.get<Client>(`http://localhost:3000/clients/${id}`);
  }

}
