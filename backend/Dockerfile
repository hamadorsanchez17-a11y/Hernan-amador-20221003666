
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY ["backend/CinePlusPlus.API/CinePlusPlus.API.csproj", "CinePlusPlus.API/"]
COPY ["backend/CinePlusPlus.Application/CinePlusPlus.Application.csproj", "CinePlusPlus.Application/"]
COPY ["backend/CinePlusPlus.Domain/CinePlusPlus.Domain.csproj", "CinePlusPlus.Domain/"]
COPY ["backend/CinePlusPlus.Infrastructure/CinePlusPlus.Infrastructure.csproj", "CinePlusPlus.Infrastructure/"]

RUN dotnet restore "CinePlusPlus.API/CinePlusPlus.API.csproj"

COPY backend/ .

WORKDIR /src/CinePlusPlus.API

RUN dotnet publish "CinePlusPlus.API.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final

WORKDIR /app

COPY --from=build /app/publish .

ENV ASPNETCORE_URLS=http://+:10000

EXPOSE 10000

ENTRYPOINT ["dotnet", "CinePlusPlus.API.dll"]
