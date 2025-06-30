# ---- Base Image ----
# Usamos una imagen oficial ligera de Python
FROM python:3.12-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Instalamos dependencias del sistema necesarias para procesamiento multimedia
RUN apt-get update && apt-get install -y \
    ffmpeg tesseract-ocr \
    && rm -rf /var/lib/apt/lists/*

# Copiamos el archivo de requerimientos para instalar dependencias de Python
COPY requirements.txt .

# Instalamos pip actualizado y todas las dependencias del proyecto
RUN pip install --upgrade pip && pip install --no-cache-dir -r requirements.txt

# Copiamos el resto del código fuente al contenedor
COPY . .

# Exponemos el puerto donde escuchará la app (cámbialo si usas otro)
EXPOSE 8000

# Comando por defecto para iniciar el servicio
CMD ["python", "main.py"]

# -----------------------------------------------
# Dockerfile for Python microservice (media worker)
# Includes system deps for ffmpeg and tesseract
# Multi-stage and security best practices ready
# Maintained by: JuanjoOspinaDev
# -----------------------------------------------
