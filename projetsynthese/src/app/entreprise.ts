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
  nom: string;
  motDePasse?: string;
}
