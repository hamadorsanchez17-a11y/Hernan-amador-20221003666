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
        _context.Peliculas.Update(pelicula);
        await _context.SaveChangesAsync();
    }

    public async Task DeleteAsync(Pelicula pelicula)
    {
        _context.Peliculas.Remove(pelicula);
        await _context.SaveChangesAsync();
    }
}