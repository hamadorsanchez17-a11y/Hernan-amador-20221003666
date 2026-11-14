export interface Pelicula {
    idPelicula: number;
    titulo: string;
    anio: number;
    genero: string;
    vista: boolean;
    calificacion: number;
    imagenUrl: string | null;
}

export interface CrearPeliculaDto {
    titulo: string;
    anio: number;
    genero: string;
    vista: boolean;
    calificacion: number;
    imagenUrl: string | null;
}