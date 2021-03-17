export interface Stagiaire {
  _id: string;
  nom: string;
  prenom: string;
  courriel: string;
  telephone: string;
  ville: string;
  competences: string[];
  formations: string;
  messageMotivation: string;
  dateDebutStage: string;
}
