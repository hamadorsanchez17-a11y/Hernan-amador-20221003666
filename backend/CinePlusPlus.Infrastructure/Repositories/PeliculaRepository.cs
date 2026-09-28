using CinePlusPlus.Application.Interfaces;
using CinePlusPlus.Domain;

namespace CinePlusPlus.Infrastructure.Repositories;

public class PeliculaRepository : IPeliculaRepository
{
    public Task<IEnumerable<Pelicula>> GetAllAsync()
    {
        throw new NotImplementedException();
    }
}