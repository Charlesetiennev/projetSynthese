# Projet Synthèse AEC développement web 
## Présentation du projet
eStage est une plateforme pour mettre en relation des étudiants à la recherche d'un stage avec des entreprises qui recherchent des stagiaires.
Le site a pour but de mettre en relation
|Public   |Étudiant   |Entreprise   |
|---|---|---|
|Consulter les offres et demandes<br> de stage validées par un administrateur   |Remplir un formulaire d'inscription   |Remplir un formulaire d'inscription   |  
||Consulter et modifier son profil|Consulter et modifier son profil|
||Remplir un formulaire de demandes de stage| Remplir un formulaire pour poster des offres de stage|
||Consulter et modifier sa demande|Consulter et modifier ses demandes| 
||Consultez la liste des entreprises et offres de stage via le panneau administration. Possibilité d'envoyer un mail à la compagnie via l'annonce qu'il selectionne|Consultez la liste des candidats et demandes de stage via le panneau administration. Possibilité d'envoyer un mail au futur stagiaire via l'annonce qu'il selectionne|| 
## Technologies utilisées
* Application
  * Angular
  * Angular Router
  * Angular HTTP
  * Angular registerLocaleData (Affichez les dates en français)
* Feuilles de style et Framework interface utilisateur 
  * Bootstrap 4
  * Angular Material
  * SASS
* Gestions des données
  * MongoDb
  * Heroku
  * Rest API
## Test unitaires
  * [Contenu du titre de la page composant offre-stage](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/pagesRouter/trouvez-stage/trouvez-stage.component.spec.ts)
  * [Validation du formulaire pour inscription stagiaire](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/formulaires/connexion-stagiaire/connexion-stagiaire.component.spec.ts)
  * [Contenu html carte offre stage moyen](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/carteStage/offre-stage-moyenne/offre-stage-moyenne.component.spec.ts)
  * [Pas d'erreur d'écriture dans le composant accueil](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/pagesRouter/accueil/accueil.component.spec.ts)
  * [Le h3 du pied-de-page doit être __bold__](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/pied-de-page/pied-de-page.component.spec.ts)
  * [Validation du nombre de **li** dans composant pourquoi-publier-stage](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/sectionLiens/pourquoi-publier-stage/pourquoi-publier-stage.component.spec.ts)
  * [Vérification que la div stagiaire n'est pas ouverte à l'ouverture de la page](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/pagesRouter/connexion-inscription/connexion-inscription.component.spec.ts)
  * [S'assurer que l'état pour ne pas voir l'entièreté des demandes à l'ouverture de la page](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/pagesRouter/trouvez-stagiaire/trouvez-stagiaire.component.spec.ts)
  * [La navigation contient 5 liens](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/navigation/navigation.component.spec.ts)
  * [Vérifiez la valeur du Href dans le composant trouver-un-stage](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/sectionLiens/trouvez-un-stage/trouvez-un-stage.component.spec.ts)
  * [Testez que la valeur connectée dans environnement ne change pas si le formulaire n'est pas valide](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/formulaires/connexion-stagiaire/connexion-stagiaire.component.spec.ts)
  * [Vérifiez que le formulaire de modification n'est pas ouvert au départ dans composant fiche-candidat-admin](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/administration/fiche-candidat-admin/fiche-candidat-admin.component.spec.ts)
  * [Contenu du logo ne contient pas de fautes](https://github.com/Charlesetiennev/projetSynthese/blob/main/projetsynthese/src/app/administration/navigation-admin/navigation-admin.component.spec.ts)
