// Stagiaire.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
export interface Stagiaire {
  _id: string | null;
  nom: string;
  prenom: string;
  courriel: string;
  telephone: string;
  ville: string;
  competences: string;
  formations: string;
  messageMotivation: string;
  accepter: boolean;
  motDePasse: string;
  niveauAcces: number;
}
