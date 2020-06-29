const index = require("./src/index");

let router = function(url,res){

    switch(url){

        case "/":

            index.homePage(res);
            break;

        case "/en-Cartelera":

            index.enCartelera(res);
            break;

        case "/mas-Votadas":

            index.masVotadas(res);
            break;

        case "/preguntas-Frecuentes":

            index.preguntasFrecuentes(res);
            break;

        case "/sucursales":

            index.sucursales(res);
            break;

        case "/contacto":

            index.contacto(res);
            break;

        default:

            break;
    }}

module.exports = router;