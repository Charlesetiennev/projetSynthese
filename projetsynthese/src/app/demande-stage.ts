import { Stagiaire } from './stagiaire';
export interface DemandeStage {
  _id: string | null;
  titre: string;
  ville: string;
  dateDebut: string;
  dateFin: string;
  description: string;
  nombreHeuresSemaine: number;
  informationSupplementaire?: string;
  programmeSuivi: string;
  autreFormation?: string;
  competencesAcquises: string;
  typeDeStage: string;
  dureeStageSemaine: number;
  remuneration: string;
  dateDeParution: string;
  stagiaire: Stagiaire;
  accepter: boolean;
}
