
# Etapa 1: compilar la aplicación
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

# Copiar los archivos de proyecto
COPY ["CinePlusPlus.API/CinePlusPlus.API.csproj", "CinePlusPlus.API/"]
COPY ["CinePlusPlus.Application/CinePlusPlus.Application.csproj", "CinePlusPlus.Application/"]
COPY ["CinePlusPlus.Domain/CinePlusPlus.Domain.csproj", "CinePlusPlus.Domain/"]
COPY ["CinePlusPlus.Infrastructure/CinePlusPlus.Infrastructure.csproj", "CinePlusPlus.Infrastructure/"]

# Restaurar dependencias
RUN dotnet restore "CinePlusPlus.API/CinePlusPlus.API.csproj"

# Copiar el resto del código
COPY . .

# Publicar la API
WORKDIR /src/CinePlusPlus.API
RUN dotnet publish "CinePlusPlus.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

# Etapa 2: ejecutar la aplicación
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

# Render utilizará el puerto 10000
ENV ASPNETCORE_URLS=http://+:10000

EXPOSE 10000

ENTRYPOINT ["dotnet", "CinePlusPlus.API.dll"]
