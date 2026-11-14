using System.ComponentModel.DataAnnotations;

namespace CinePlusPlus.Domain;

public class Pelicula
{
    [Key]
    public int IdPelicula { get; set; }

    public string Titulo { get; set; } = string.Empty;

    public int Anio { get; set; }

    public string Genero { get; set; } = string.Empty;

    public bool Vista { get; set; }

    public decimal Calificacion { get; set; }

    public string? ImagenUrl { get; set; }
}