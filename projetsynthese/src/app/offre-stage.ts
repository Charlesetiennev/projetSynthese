import { Entreprise } from './entreprise';
export interface OffreStage {
  _id: string | null;
  titre: string;
  ville: string;
  secteursActivites: string[];
  dateDebut: string;
  dateFin: string;
  description: string;
  nombreHeuresSemaine: number;
  competencesRechercher: string;
  emploieApresStage: boolean;
  informationSupplementaire?: string;
  typeDeStage: string;
  dureeStageSemaine: number;
  remuneration: boolean;
  dateDeParution: string;
  entreprise: Entreprise;
  accepter: boolean;
}
