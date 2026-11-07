
import axios from 'axios';
import type { Pelicula } from '../types/pelicula.types';

// Cliente HTTP centralizado
const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Obtener todas las películas desde el backend
export const obtenerPeliculas = async (): Promise<Pelicula[]> => {
    const respuesta = await apiClient.get<Pelicula[]>('/peliculas');
    return respuesta.data;
};
