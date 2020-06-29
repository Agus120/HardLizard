const fs = require('fs');

let sucursales = {

    ruta:'./data/theaters.json',

    titulo:"Nuestras Salas.",

    leerJSON: function() {

        let theatersJson = fs.readFileSync(this.ruta, 'utf-8');

        let theaters = JSON.parse(theatersJson);

        return theaters;

    },

    cantidadSalas: function() {

        return this.leerJSON().total_theaters;}

}

module.exports = sucursales;