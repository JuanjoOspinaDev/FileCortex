# ---- Base Image ----
# Usamos la imagen oficial de OpenResty (Nginx + LuaJIT), basada en Alpine para ligereza y seguridad
FROM openresty/openresty:1.25.3.1-3-alpine

# Copiamos el archivo principal de configuración de Nginx/OpenResty
COPY nginx.conf /usr/local/openresty/nginx/conf/nginx.conf

# Copiamos todos los scripts Lua personalizados (para autenticación, enrutamiento, etc.)
COPY lua/ /usr/local/openresty/nginx/lua/

# Exponemos el puerto HTTP por defecto (cámbialo si usas otro)
EXPOSE 80

# Comando de arranque por defecto, mantiene Nginx/OpenResty corriendo en foreground
CMD ["/usr/local/openresty/bin/openresty", "-g", "daemon off;"]

# ----------------------------------------------------------
# Dockerfile for API Gateway using OpenResty (Nginx + Lua)
# Includes main nginx.conf and all custom Lua scripts
# Maintained by: JuanjoOspinaDev
# ----------------------------------------------------------
