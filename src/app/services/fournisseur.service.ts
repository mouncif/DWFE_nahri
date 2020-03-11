import { Injectable } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {

 
  private baseUrl = "http://localhost:3000/fournisseurs";
  private fournisseur: Fournisseur = {
    nom: '',
    nomCourt: '',
    adresse: '',
    ville: '',
    mail: '',
    telFix: '',
    telMob: '',
    fax: '',
  };
  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Fournisseur[]>(this.baseUrl);
  }
  deleteFournisseur(id){
    return this.http.delete<Fournisseur>(this.baseUrl+`/${id}`);
  }
  addFournisseur(fournisseur){
    return this.http.post<Fournisseur>(this.baseUrl, fournisseur);
  }
  updateFournisseur(fournisseur){
    return this.http.put<Fournisseur>(this.baseUrl + `/${fournisseur.id}`, fournisseur);
  }
  getFournisseurById(id: any) {
    return this.http.get<Fournisseur>(`http://localhost:3000/fournisseurs/${id}`);
  }
}
