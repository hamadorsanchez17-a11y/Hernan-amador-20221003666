namespace CinePlusPlus.Domain;

namespace CinePlusPlus.Application.Interfaces;

public interface IPeliculaRepository
{
    Task<IEnumerable<Pelicula>> GetAllAsync();
}