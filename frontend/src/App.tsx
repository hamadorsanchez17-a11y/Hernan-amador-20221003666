
import { useEffect, useState } from 'react';

import AppLayout from './layouts/AppLayout';
import PeliculaCard from './features/peliculas/components/PeliculaCard';
import CrearPeliculaForm from './features/peliculas/components/CrearPeliculaForm';

import {
    obtenerPeliculas,
    eliminarPelicula,
    extraerMensajeError
} from './features/peliculas/api/peliculasApi';

import type { Pelicula } from './features/peliculas/types/pelicula.types';

function App() {
    const [peliculas, setPeliculas] = useState<Pelicula[]>([]);
    const [busqueda, setBusqueda] = useState('');
    const [cargando, setCargando] = useState(true);
    const [errorCarga, setErrorCarga] = useState('');
    const [errorEliminar, setErrorEliminar] = useState('');
    const [peliculaEditar, setPeliculaEditar] = useState<Pelicula | null>(null);

    useEffect(() => {
        const cargarPeliculas = async () => {
            try {
                setCargando(true);
                setErrorCarga('');

                const datos = await obtenerPeliculas();

                setPeliculas(datos);
            } catch (error) {
                console.error('Error al cargar películas:', error);
                setErrorCarga(
                    'No fue posible cargar las películas. Intenta nuevamente.'
                );
            } finally {
                setCargando(false);
            }
        };

        cargarPeliculas();
    }, []);

    const peliculasFiltradas = peliculas.filter((pelicula) =>
        pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
    );

    const manejarEliminarPelicula = async (idPelicula: number) => {
        try {
            setErrorEliminar('');

            await eliminarPelicula(idPelicula);

            setPeliculas((anteriores) =>
                anteriores.filter(
                    (pelicula) => pelicula.idPelicula !== idPelicula
                )
            );

            if (peliculaEditar?.idPelicula === idPelicula) {
                setPeliculaEditar(null);
            }
        } catch (error) {
            setErrorEliminar(extraerMensajeError(error));
        }
    };

    const manejarPeliculaActualizada = (peliculaActualizada: Pelicula) => {
        setPeliculas((anteriores) =>
            anteriores.map((pelicula) =>
                pelicula.idPelicula === peliculaActualizada.idPelicula
                    ? peliculaActualizada
                    : pelicula
            )
        );

        setPeliculaEditar(null);
    };

    return (
        <AppLayout>

            <section className="mb-12">
                <p className="text-red-500 uppercase tracking-widest text-sm font-bold mb-3">
                    Bienvenido a Cine++
                </p>

                <h2 className="text-4xl md:text-5xl font-black mb-4">
                    Descubrí tu próxima película favorita.
                </h2>

                <p className="text-slate-400 max-w-2xl">
                    Explorá nuestro catálogo y encontrá historias que merecen
                    ser vistas en la pantalla grande.
                </p>
            </section>

            <CrearPeliculaForm
                onPeliculaCreada={(nuevaPelicula) => {
                    setPeliculas((anteriores) => [
                        ...anteriores,
                        nuevaPelicula
                    ]);
                }}
                peliculaEditar={peliculaEditar}
                onPeliculaActualizada={manejarPeliculaActualizada}
                onCancelarEdicion={() => setPeliculaEditar(null)}
            />

            <section>

                <div className="flex flex-col md:flex-row justify-between gap-5 mb-8">

                    <div>
                        <h2 className="text-2xl font-bold">
                            Nuestro catálogo
                        </h2>

                        <p className="text-slate-400 text-sm mt-1">
                            Explorá las películas disponibles.
                        </p>
                    </div>

                    <input
                        type="text"
                        placeholder="Buscar película..."
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500 w-full md:w-80"
                    />

                </div>

                {errorEliminar && (
                    <p className="text-red-400 mb-4">
                        {errorEliminar}
                    </p>
                )}

                {cargando ? (
                    <p className="text-slate-400">
                        Cargando películas...
                    </p>
                ) : errorCarga ? (
                    <p className="text-red-400">
                        {errorCarga}
                    </p>
                ) : peliculasFiltradas.length === 0 ? (
                    <p className="text-slate-400">
                        No encontramos películas con ese nombre.
                    </p>
                ) : (

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                        {peliculasFiltradas.map((pelicula) => (
                            <PeliculaCard
                                key={pelicula.idPelicula}
                                pelicula={pelicula}
                                onEliminar={manejarEliminarPelicula}
                                onEditar={setPeliculaEditar}
                            />
                        ))}

                    </div>

                )}

            </section>

        </AppLayout>
    );
}

export default App;
