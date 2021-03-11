import { Entreprise } from './entreprise';
export interface OffreStage {
  id: string;
  titre: string;
  entreprise: Entreprise;
  dateDebut: string;
  dateFin: string;
  description: string;
  nombreHeuresSemaine: number;
  competencesRechercher: string[];
  remuneration: boolean;
  emploieApresStage: boolean;
  dateDeParution: string;
  informationSupplementaire?: string;
}
