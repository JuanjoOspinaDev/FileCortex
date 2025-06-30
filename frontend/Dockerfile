# ---- Build Stage ----
# Usamos una imagen ligera y segura de Node.js para construir la app
FROM node:20-alpine AS builder

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de lock para asegurar builds reproducibles
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# Instalamos las dependencias según el gestor detectado
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then npm install -g pnpm && pnpm install; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    fi

# Copiamos el resto del código fuente
COPY . .

# Compilamos la aplicación Next.js (esto genera el .next/ y optimiza el código)
RUN npm run build

# ---- Production Stage ----
FROM node:20-alpine

# Directorio de trabajo para la app en producción
WORKDIR /app

# Copiamos los archivos construidos del builder
COPY --from=builder /app ./

# Exponemos el puerto por defecto de Next.js
EXPOSE 3000

# Comando por defecto para iniciar la aplicación en producción
CMD ["npm", "run", "start"]

# -------------------------------------
# Dockerfile for Next.js production build
# Multi-stage: first build, then run optimized app
# Maintained by: JuanjoOspinaDev
# -------------------------------------
