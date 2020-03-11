import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  constructor(private http: HttpClient) {
  }

  findAll() {
    return this.http.get<[Produit]>(" http://localhost:3000/produits");
  }
  deleteProduit(id) {
    return this.http.delete(`http://localhost:3000/produits/${id}`);
  }
  addProduit(produit) {
    return this.http.post("http://localhost:3000/produits", produit);
  }
  updateProduit(produit) {
    return this.http.put(`http://localhost:3000/produits/${produit.id}`, produit);
  }
  getProduitById(id: any) {
    return this.http.get<Produit>(`http://localhost:3000/produits/${id}`);
  }

}
