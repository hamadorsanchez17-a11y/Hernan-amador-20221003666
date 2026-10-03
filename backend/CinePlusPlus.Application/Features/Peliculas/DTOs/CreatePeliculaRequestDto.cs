namespace CinePlusPlus.Application.Features.Peliculas.DTOs;

public class CreatePeliculaRequestDto
{
    public string Titulo { get; set; } = string.Empty;
    public int Anio { get; set; }
    public string Genero { get; set; } = string.Empty;
    public bool Vista { get; set; }
    public int Calificacion { get; set; }
}