using CinePlusPlus.Application.Features.Peliculas.Validators;
using FluentValidation;
using Microsoft.Extensions.DependencyInjection;

namespace CinePlusPlus.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(
        this IServiceCollection services)
    {
        services.AddValidatorsFromAssemblyContaining<CreatePeliculaValidator>();

        return services;
    }
}