import type { Pelicula } from '../types/pelicula.types';

const peliculas: Pelicula[] = [
    {
        id: 1,
        titulo: 'Interstellar',
        genero: 'Ciencia ficción',
        duracion: 169,
        clasificacion: 'PG-13',
        anio: 2014,
        imagen: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
        descripcion: 'Un grupo de exploradores viaja más allá de esta galaxia.',
    },
    {
        id: 2,
        titulo: 'Inception',
        genero: 'Ciencia ficción',
        duracion: 148,
        clasificacion: 'PG-13',
        anio: 2010,
        imagen: 'https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg',
        descripcion: 'Un ladrón especializado en extraer secretos de los sueños.',
    },
    {
        id: 3,
        titulo: 'The Batman',
        genero: 'Acción',
        duracion: 176,
        clasificacion: 'PG-13',
        anio: 2022,
        imagen: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
        descripcion: 'Batman investiga la corrupción que amenaza Gotham.',
    },
    {
        id: 4,
        titulo: 'Spider-Man: No Way Home',
        genero: 'Acción',
        duracion: 148,
        clasificacion: 'PG-13',
        anio: 2021,
        imagen: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
        descripcion: 'Peter Parker enfrenta las consecuencias de revelar su identidad.',
    },
    {
        id: 5,
        titulo: 'Coco',
        genero: 'Animación',
        duracion: 105,
        clasificacion: 'PG',
        anio: 2017,
        imagen: 'https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
        descripcion: 'Miguel emprende un viaje extraordinario por el mundo de los muertos.',
    },
    {
        id: 6,
        titulo: 'Dune: Part Two',
        genero: 'Ciencia ficción',
        duracion: 166,
        clasificacion: 'PG-13',
        anio: 2024,
        imagen: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
        descripcion: 'Paul Atreides se une a los Fremen en su búsqueda de venganza.',
    },
];

export const obtenerPeliculas = (): Pelicula[] => {
    return peliculas;
};