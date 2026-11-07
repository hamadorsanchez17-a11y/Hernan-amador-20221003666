
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import type { Pelicula } from '../types/pelicula.types';

import {
    crearPeliculaSchema,
    type CrearPeliculaFormData
} from '../types/pelicula.schema';

import {
    crearPelicula,
    actualizarPelicula,
    extraerMensajeError
} from '../api/peliculasApi';

interface CrearPeliculaFormProps {
    onPeliculaCreada: (pelicula: Pelicula) => void;
    peliculaEditar: Pelicula | null;
    onPeliculaActualizada: (pelicula: Pelicula) => void;
    onCancelarEdicion: () => void;
}

function CrearPeliculaForm({
                               onPeliculaCreada,
                               peliculaEditar,
                               onPeliculaActualizada,
                               onCancelarEdicion
                           }: CrearPeliculaFormProps) {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting }
    } = useForm<CrearPeliculaFormData>({
        resolver: zodResolver(crearPeliculaSchema),
        mode: 'onChange',
        defaultValues: {
            titulo: '',
            anio: new Date().getFullYear(),
            genero: '',
            vista: false,
            calificacion: 0
        }
    });

    const [error, setError] = useState('');
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        if (peliculaEditar) {
            reset({
                titulo: peliculaEditar.titulo,
                anio: peliculaEditar.anio,
                genero: peliculaEditar.genero,
                vista: peliculaEditar.vista,
                calificacion: peliculaEditar.calificacion
            });
        } else {
            reset({
                titulo: '',
                anio: new Date().getFullYear(),
                genero: '',
                vista: false,
                calificacion: 0
            });
        }

        setError('');
        setMensaje('');
    }, [peliculaEditar, reset]);

    const manejarSubmit = async (datos: CrearPeliculaFormData) => {
        setError('');
        setMensaje('');

        try {
            if (peliculaEditar) {
                const peliculaActualizada = await actualizarPelicula(
                    peliculaEditar.idPelicula,
                    datos
                );

                onPeliculaActualizada(peliculaActualizada);

                setMensaje(
                    `¡${peliculaActualizada.titulo} fue actualizada correctamente!`
                );

                onCancelarEdicion();
            } else {
                const nuevaPelicula = await crearPelicula(datos);

                onPeliculaCreada(nuevaPelicula);

                setMensaje(
                    `¡${nuevaPelicula.titulo} fue registrada correctamente!`
                );

                reset();
            }
        } catch (error) {
            setError(extraerMensajeError(error));
        }
    };

    return (
        <section className="bg-slate-900 border border-slate-800 rounded-xl p-6 mb-10">

            <h2 className="text-2xl font-bold text-white mb-6">
                {peliculaEditar ? 'Editar película' : 'Registrar película'}
            </h2>

            <form onSubmit={handleSubmit(manejarSubmit)} className="space-y-5">

                <div>
                    <label className="block text-sm text-slate-300 mb-2">
                        Título
                    </label>

                    <input
                        {...register('titulo')}
                        type="text"
                        placeholder="Ej. Interestelar"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                    />

                    {errors.titulo && (
                        <p className="text-red-400 text-sm mt-1">
                            {errors.titulo.message}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">
                            Año
                        </label>

                        <input
                            {...register('anio', { valueAsNumber: true })}
                            type="number"
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                        />

                        {errors.anio && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.anio.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block text-sm text-slate-300 mb-2">
                            Género
                        </label>

                        <input
                            {...register('genero')}
                            type="text"
                            placeholder="Ej. Ciencia ficción"
                            className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                        />

                        {errors.genero && (
                            <p className="text-red-400 text-sm mt-1">
                                {errors.genero.message}
                            </p>
                        )}
                    </div>

                </div>

                <div>
                    <label className="block text-sm text-slate-300 mb-2">
                        Calificación (0-10)
                    </label>

                    <input
                        {...register('calificacion', { valueAsNumber: true })}
                        type="number"
                        min="0"
                        max="10"
                        step="1"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white outline-none focus:border-red-500"
                    />

                    {errors.calificacion && (
                        <p className="text-red-400 text-sm mt-1">
                            {errors.calificacion.message}
                        </p>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    <input
                        {...register('vista')}
                        id="vista"
                        type="checkbox"
                        className="w-4 h-4 accent-red-600"
                    />

                    <label htmlFor="vista" className="text-sm text-slate-300">
                        Ya vi esta película
                    </label>
                </div>

                {error && (
                    <p className="text-red-400 text-sm">
                        {error}
                    </p>
                )}

                {mensaje && (
                    <p className="text-green-400 text-sm">
                        {mensaje}
                    </p>
                )}

                <div className="flex gap-3">

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition"
                    >
                        {isSubmitting
                            ? 'Guardando...'
                            : peliculaEditar
                                ? 'Guardar cambios'
                                : 'Registrar película'}
                    </button>

                    {peliculaEditar && (
                        <button
                            type="button"
                            onClick={onCancelarEdicion}
                            className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-5 py-3 rounded-lg transition"
                        >
                            Cancelar
                        </button>
                    )}

                </div>

            </form>
        </section>
    );
}

export default CrearPeliculaForm;
