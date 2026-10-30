import type { Pelicula } from '../types/pelicula.types';

interface PeliculaCardProps {
    pelicula: Pelicula;
}

function PeliculaCard({ pelicula }: PeliculaCardProps) {
    return (
        <article className="group overflow-hidden rounded-xl bg-slate-900 border border-slate-800 hover:border-red-500 transition duration-300">

            <div className="aspect-[2/3] overflow-hidden">
                <img
                    src={pelicula.imagen}
                    alt={pelicula.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
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

                <h3 className="text-white font-bold text-lg mb-2">
                    {pelicula.titulo}
                </h3>

                <p className="text-slate-400 text-sm mb-4">
                    {pelicula.descripcion}
                </p>

                <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>{pelicula.duracion} min</span>
                    <span>{pelicula.clasificacion}</span>
                </div>
            </div>

        </article>
    );
}

export default PeliculaCard;