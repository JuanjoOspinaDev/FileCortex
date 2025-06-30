# ---- Build Stage ----
# Usamos una imagen oficial y ligera de Go para compilar el binario
FROM golang:1.23-alpine AS builder

# Directorio de trabajo dentro del contenedor de build
WORKDIR /app

# Copiamos los archivos de dependencias primero para aprovechar la cache de Docker
COPY go.mod go.sum ./
RUN go mod download

# Copiamos el resto del código fuente
COPY . .

# Compilamos el binario para Linux, sin dependencias C (CGO_DISABLED=0)
RUN CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build -o app main.go

# ---- Production Stage ----
# Usamos una imagen de Alpine aún más ligera para la producción
FROM alpine:3.21

WORKDIR /app

# Copiamos solo el binario y archivos de configuración necesarios
COPY --from=builder /app/app .
COPY --from=builder /app/config ./config

# Exponemos el puerto por defecto del microservicio (modifica según tu app)
EXPOSE 8080

# Comando de arranque para el microservicio Go
CMD ["./app"]

# -------------------------------------------------------
# Dockerfile for Go microservice (multi-stage build)
# Compiles statically for smallest possible production image
# Maintained by: JuanjoOspinaDev
# -------------------------------------------------------
