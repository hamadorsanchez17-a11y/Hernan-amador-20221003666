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
}