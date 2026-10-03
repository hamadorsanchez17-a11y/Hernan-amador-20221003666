namespace CinePlusPlus.Application.Features.Peliculas.DTOs;

public class PeliculaResponseDto
{
    public int IdPelicula { get; set; }
    public string Titulo { get; set; } = string.Empty;
    public int Anio { get; set; }
    public string Genero { get; set; } = string.Empty;
    public bool Vista { get; set; }
    public int Calificacion { get; set; }
}