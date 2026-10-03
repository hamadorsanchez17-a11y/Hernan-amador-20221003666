using CinePlusPlus.Application.Features.Peliculas.DTOs;
using FluentValidation;

namespace CinePlusPlus.Application.Features.Peliculas.Validators;
public class CreatePeliculaValidator : AbstractValidator<CreatePeliculaRequestDto>
{
    public CreatePeliculaValidator()
    {
        RuleFor(x => x.Titulo)
            .NotEmpty()
            .MinimumLength(2)
            .MaximumLength(150);

        RuleFor(x => x.Genero)
            .NotEmpty()
            .MaximumLength(50);

        RuleFor(x => x.Anio)
            .InclusiveBetween(1888, 2100);

        RuleFor(x => x.Calificacion)
            .InclusiveBetween(0, 10);
    }
}