using CinePlusPlus.Application;
using CinePlusPlus.Infrastructure;

var builder = WebApplication.CreateBuilder(args);

var connectionString =
    builder.Configuration.GetConnectionString("PostgresConnection")
    ?? throw new InvalidOperationException(
        "No se encontró la cadena de conexión.");

builder.Services.AddApplication();
builder.Services.AddInfrastructure(connectionString);

builder.Services.AddControllers();

builder.Services.AddOpenApi();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.MapControllers();

app.Run();