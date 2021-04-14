// Demande-stage.ts
// Par Charles-Etienne Villemure
// Le 13 Avril 2021
import { Stagiaire } from './stagiaire';
export interface DemandeStage {
  _id: string | null;
  titre: string;
  ville: string;
  dateDebut: string | Date;
  dateFin: string | Date;
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
