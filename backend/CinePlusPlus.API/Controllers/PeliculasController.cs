using CinePlusPlus.Application.Features.Peliculas.DTOs;
using CinePlusPlus.Application.Interfaces;
using CinePlusPlus.Domain;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;

namespace CinePlusPlus.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PeliculasController : ControllerBase
{
    private readonly IPeliculaRepository _repository;
    private readonly IValidator<CreatePeliculaRequestDto> _createValidator;
    private readonly IValidator<UpdatePeliculaRequestDto> _updateValidator;

    public PeliculasController(
        IPeliculaRepository repository,
        IValidator<CreatePeliculaRequestDto> createValidator,
        IValidator<UpdatePeliculaRequestDto> updateValidator)
    {
        _repository = repository;
        _createValidator = createValidator;
        _updateValidator = updateValidator;
    }

    [HttpGet]
    public async Task<IActionResult> GetPeliculas()
    {
        var peliculas = await _repository.GetAllAsync();

        var response = peliculas.Select(p => new PeliculaResponseDto
        {
            IdPelicula = p.IdPelicula,
            Titulo = p.Titulo,
            Anio = p.Anio,
            Genero = p.Genero,
            Vista = p.Vista,
            Calificacion = p.Calificacion
        });

        return Ok(response);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPelicula(int id)
    {
        var pelicula = await _repository.GetByIdAsync(id);

        if (pelicula is null)
            return NotFound();

        var response = new PeliculaResponseDto
        {
            IdPelicula = pelicula.IdPelicula,
            Titulo = pelicula.Titulo,
            Anio = pelicula.Anio,
            Genero = pelicula.Genero,
            Vista = pelicula.Vista,
            Calificacion = pelicula.Calificacion
        };

        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> CrearPelicula(
        [FromBody] CreatePeliculaRequestDto request)
    {
        var validationResult =
            await _createValidator.ValidateAsync(request);

        if (!validationResult.IsValid)
            return BadRequest(validationResult.Errors);

        var pelicula = new Pelicula
        {
            Titulo = request.Titulo,
            Anio = request.Anio,
            Genero = request.Genero,
            Vista = request.Vista,
            Calificacion = request.Calificacion
        };

        var peliculaCreada = await _repository.AddAsync(pelicula);

        var response = new PeliculaResponseDto
        {
            IdPelicula = peliculaCreada.IdPelicula,
            Titulo = peliculaCreada.Titulo,
            Anio = peliculaCreada.Anio,
            Genero = peliculaCreada.Genero,
            Vista = peliculaCreada.Vista,
            Calificacion = peliculaCreada.Calificacion
        };

        return CreatedAtAction(
            nameof(GetPelicula),
            new { id = response.IdPelicula },
            response);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> ActualizarPelicula(
        int id,
        [FromBody] UpdatePeliculaRequestDto request)
    {
        var validationResult =
            await _updateValidator.ValidateAsync(request);

        if (!validationResult.IsValid)
            return BadRequest(validationResult.Errors);

        var pelicula = await _repository.GetByIdAsync(id);

        if (pelicula is null)
            return NotFound();

        pelicula.Titulo = request.Titulo;
        pelicula.Anio = request.Anio;
        pelicula.Genero = request.Genero;
        pelicula.Vista = request.Vista;
        pelicula.Calificacion = request.Calificacion;

        await _repository.UpdateAsync(pelicula);

        return NoContent();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> EliminarPelicula(int id)
    {
        var pelicula = await _repository.GetByIdAsync(id);

        if (pelicula is null)
            return NotFound();

        await _repository.DeleteAsync(pelicula);

        return NoContent();
    }
}