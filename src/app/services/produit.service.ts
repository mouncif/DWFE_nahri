import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) {
   }

   findAll(){
    return this.http.get<[Produit]>(" http://localhost:3000/produits");
  }
  delete(id){
    return this.http.delete(`http://localhost:3000/produits/${id}`);
  }
  
    add(produit){
      return this.http.post("http://localhost:3000/produits", produit);
    }
    update(produit){
      return this.http.put(`http://localhost:3000/produits/${produit.id}`, produit);
    }



}
