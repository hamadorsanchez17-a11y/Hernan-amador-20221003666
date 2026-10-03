using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CinePlusPlus.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Peliculas",
                columns: table => new
                {
                    IdPelicula = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Titulo = table.Column<string>(type: "text", nullable: false),
                    Anio = table.Column<int>(type: "integer", nullable: false),
                    Genero = table.Column<string>(type: "text", nullable: false),
                    Vista = table.Column<bool>(type: "boolean", nullable: false),
                    Calificacion = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Peliculas", x => x.IdPelicula);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Peliculas");
        }
    }
}
