using CinePlusPlus.Domain;

namespace CinePlusPlus.Application.Interfaces;

public interface IPeliculaRepository
{
    Task<IEnumerable<Pelicula>> GetAllAsync();
    Task<Pelicula?> GetByIdAsync(int id);
    Task<Pelicula> AddAsync(Pelicula pelicula);
    Task UpdateAsync(Pelicula pelicula);
    Task DeleteAsync(Pelicula pelicula);
}