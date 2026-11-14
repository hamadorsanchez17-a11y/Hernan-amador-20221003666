import { z } from 'zod';

export const crearPeliculaSchema = z.object({
    titulo: z.string()
        .trim()
        .min(1, 'El título es obligatorio.')
        .max(100, 'El título no puede superar los 100 caracteres.'),

    anio: z.number()
        .int('El año debe ser un número entero.')
        .min(1888, 'El año debe ser igual o posterior a 1888.')
        .max(new Date().getFullYear(), 'El año no puede ser futuro.'),

    genero: z.string()
        .trim()
        .min(1, 'El género es obligatorio.')
        .max(50, 'El género no puede superar los 50 caracteres.'),

    vista: z.boolean(),

    calificacion: z.number()
        .min(0, 'La calificación mínima es 0.')
        .max(10, 'La calificación máxima es 10.'),

    imagenUrl: z.string()
        .trim()
        .refine(
            (url) => url === '' || z.string().url().safeParse(url).success,
            'Introduce una URL de imagen válida.'
        )
});

export type CrearPeliculaFormData = z.infer<typeof crearPeliculaSchema>;