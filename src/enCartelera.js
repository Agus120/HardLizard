const fs = require("fs");

let enCartelera = {

    ruta: './data/movies.json',

    titulo: "En Cartelera",

    leerJSON: function() {

        let moviesJson = fs.readFileSync(this.ruta, 'utf-8');

        let movies = JSON.parse(moviesJson);

        return movies;

    }, 
    
    cantidad: function(){

        return this.leerJSON().total_movies; }}

module.exports = enCartelera;