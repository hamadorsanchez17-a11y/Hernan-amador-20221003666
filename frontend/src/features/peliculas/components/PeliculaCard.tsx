
import { useState } from 'react';
import type { Pelicula } from '../types/pelicula.types';

interface PeliculaCardProps {
    pelicula: Pelicula;
    onEliminar: (idPelicula: number) => void;
    onEditar: (pelicula: Pelicula) => void;
}

function PeliculaCard({
                          pelicula,
                          onEliminar,
                          onEditar
                      }: PeliculaCardProps) {

    const [errorImagen, setErrorImagen] = useState(false);

    const manejarEliminar = () => {
        const confirmar = window.confirm(
            `¿Estás seguro de que deseas eliminar "${pelicula.titulo}"?`
        );

        if (confirmar) {
            onEliminar(pelicula.idPelicula);
        }
    };

    return (
        <article className="group overflow-hidden rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500 transition duration-300">

            <div className="aspect-[2/3] overflow-hidden flex items-center justify-center bg-slate-800">

                {pelicula.imagenUrl && !errorImagen ? (
                    <img
                        src={pelicula.imagenUrl}
                        alt={`Portada de ${pelicula.titulo}`}
                        onError={() => setErrorImagen(true)}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                ) : (
                    <span className="text-6xl">🎬</span>
                )}

            </div>

            <div className="p-4">

                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-red-400 font-semibold">
                        {pelicula.genero}
                    </span>

                    <span className="text-xs text-slate-400">
                        {pelicula.anio}
                    </span>
                </div>

                <h3 className="text-white font-bold text-lg mb-3">
                    {pelicula.titulo}
                </h3>

                <div className="flex justify-between items-center text-xs text-slate-400 mb-3">
                    <span>
                        {pelicula.vista ? 'Ya la viste' : 'Pendiente'}
                    </span>

                    <span>
                        ⭐ {pelicula.calificacion}/10
                    </span>
                </div>

                <div className="flex justify-between items-center mb-3">
                    <span className="text-xs text-slate-500">
                        ID: {pelicula.idPelicula}
                    </span>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => onEditar(pelicula)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
                    >
                        Editar
                    </button>

                    <button
                        onClick={manejarEliminar}
                        className="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
                    >
                        Eliminar
                    </button>
                </div>

            </div>

        </article>
    );
}

export default PeliculaCard;
