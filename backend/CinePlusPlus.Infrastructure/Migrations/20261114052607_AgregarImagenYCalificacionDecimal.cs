using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CinePlusPlus.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AgregarImagenYCalificacionDecimal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<decimal>(
                name: "Calificacion",
                table: "Peliculas",
                type: "numeric",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<string>(
                name: "ImagenUrl",
                table: "Peliculas",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagenUrl",
                table: "Peliculas");

            migrationBuilder.AlterColumn<int>(
                name: "Calificacion",
                table: "Peliculas",
                type: "integer",
                nullable: false,
                oldClrType: typeof(decimal),
                oldType: "numeric");
        }
    }
}
