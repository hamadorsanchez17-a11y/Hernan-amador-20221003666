using CinePlusPlus.Application.Interfaces;
using CinePlusPlus.Infrastructure.Data;
using CinePlusPlus.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CinePlusPlus.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrastructure(
        this IServiceCollection services,
        string connectionString)
    {
        services.AddDbContext<CinePlusPlusDbContext>(options =>
            options.UseNpgsql(connectionString));

        services.AddScoped<IPeliculaRepository, PeliculaRepository>();

        return services;
    }
}