export interface Produit {
    id?: number;
    nom?: string;
    nomCourt?:string;
    prixBase?: number;
    prixVente?: number;
    seuilMax?:number;
    unite?:number;
    qteInit?:number; 
    qteActuel?:number; 
}
