using CinePlusPlus.Domain;
using Microsoft.EntityFrameworkCore;

namespace CinePlusPlus.Infrastructure.Data;

public class CinePlusPlusDbContext : DbContext
{
    public CinePlusPlusDbContext(
        DbContextOptions<CinePlusPlusDbContext> options)
        : base(options)
    {
    }

    public DbSet<Pelicula> Peliculas { get; set; }
}