import Route from "./Route.js";

//Définir ici vos routes, chaque page créée sera ajouté ici pour indiquer le chemin
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/404", "404", "/pages/404.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";