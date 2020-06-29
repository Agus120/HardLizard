const fs = require('fs');

let preguntasFrecuentes = {

    ruta: './data/faqs.json',

    titulo: "Preguntas Frecuentes.",

    leerJSON: function() {

        let preguntasJson = fs.readFileSync(this.ruta, 'utf-8');

        let preguntas = JSON.parse(preguntasJson);

        return preguntas;

    },

    cantidadPreguntas: function(){

    return this.leerJSON().total_faqs;}

}

module.exports = preguntasFrecuentes;