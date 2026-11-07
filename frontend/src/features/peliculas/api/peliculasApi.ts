
import axios from 'axios';
import type { Pelicula, CrearPeliculaDto } from '../types/pelicula.types';

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json'
    }
});

export const obtenerPeliculas = async (): Promise<Pelicula[]> => {
    const respuesta = await apiClient.get<Pelicula[]>('/peliculas');
    return respuesta.data;
};

export const crearPelicula = async (
    pelicula: CrearPeliculaDto
): Promise<Pelicula> => {
    const respuesta = await apiClient.post<Pelicula>(
        '/peliculas',
        pelicula
    );

    return respuesta.data;
};

export const actualizarPelicula = async (
    idPelicula: number,
    pelicula: CrearPeliculaDto
): Promise<Pelicula> => {
    const respuesta = await apiClient.put<Pelicula>(
        `/peliculas/${idPelicula}`,
        pelicula
    );

    return respuesta.data;
};

export const eliminarPelicula = async (
    idPelicula: number
): Promise<void> => {
    await apiClient.delete(`/peliculas/${idPelicula}`);
};

export const extraerMensajeError = (error: unknown): string => {
    if (axios.isAxiosError(error)) {
        if (!error.response) {
            return 'No se pudo conectar con el servidor.';
        }

        const datos = error.response.data;

        if (Array.isArray(datos)) {
            return datos
                .map((item) => item.errorMessage)
                .join(', ');
        }

        if (typeof datos === 'string') {
            return datos;
        }

        if (typeof datos === 'object' && datos !== null) {
            const respuesta = datos as {
                detail?: string;
                title?: string;
                errors?: Record<string, string[]>;
            };

            if (respuesta.detail) return respuesta.detail;
            if (respuesta.title) return respuesta.title;

            if (respuesta.errors) {
                return Object.values(respuesta.errors)
                    .flat()
                    .join(', ');
            }
        }

        return 'Ocurrió un error al procesar la solicitud.';
    }

    return 'Ocurrió un error inesperado.';
};
