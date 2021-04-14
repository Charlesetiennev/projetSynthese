// Entreprise.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
export interface Entreprise {
  _id: string | null;
  nomEntreprise: string;
  adresse: string;
  ville: string;
  siteWeb: string;
  logo: string;
  secteurActivite: string[];
  aPropos: string;
  numeroTel: string;
  courriel: string;
  prenomResponsable: string;
  nomResponsable: string;
  motDePasse?: string;
  accepter: boolean;
  niveauAcces: number;
}
