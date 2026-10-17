using CinePlusPlus.Application.Interfaces;
using CinePlusPlus.Domain;
using CinePlusPlus.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace CinePlusPlus.Infrastructure.Repositories;

public class PeliculaRepository : IPeliculaRepository
{
    private readonly CinePlusPlusDbContext _context;

    public PeliculaRepository(CinePlusPlusDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Pelicula>> GetAllAsync()
    {
        return await _context.Peliculas.ToListAsync();
    }

    public async Task<Pelicula?> GetByIdAsync(int id)
    {
        return await _context.Peliculas.FindAsync(id);
    }

    public async Task<Pelicula> AddAsync(Pelicula pelicula)
    {
        _context.Peliculas.Add(pelicula);
        await _context.SaveChangesAsync();

        return pelicula;
    }

    
    public async Task UpdateAsync(Pelicula pelicula)
    {
        var existente = await _context.Peliculas
            .FindAsync(pelicula.IdPelicula);

        if (existente == null)
            throw new KeyNotFoundException("Película no encontrada.");

        existente.Titulo = pelicula.Titulo;
        existente.Anio = pelicula.Anio;
        existente.Genero = pelicula.Genero;
        existente.Vista = pelicula.Vista;
        existente.Calificacion = pelicula.Calificacion;

        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Pelicula pelicula)
    {
        var existente = await _context.Peliculas
            .FindAsync(pelicula.IdPelicula);

        if (existente == null)
            throw new KeyNotFoundException("Película no encontrada.");

        _context.Peliculas.Remove(existente);
        await _context.SaveChangesAsync();
    }

}