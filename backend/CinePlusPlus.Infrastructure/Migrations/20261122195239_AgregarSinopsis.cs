using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CinePlusPlus.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AgregarSinopsis : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Sinopsis",
                table: "Peliculas",
                type: "text",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Sinopsis",
                table: "Peliculas");
        }
    }
}
