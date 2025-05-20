# Tienda Online - Backend

Backend para el sistema de tienda online. Construido con Node.js, Express y PostgreSQL.

## Tecnologías

- Node.js
- Express
- PostgreSQL
- pg
- dotenv
- cookie-parser
- cors

## Estructura del proyecto

src/
├── config/ # Conexión a la base de datos
├── controllers/ # Lógica de negocio por recurso
├── middlewares/ # Manejo de errores, cookies, validaciones
├── models/ # Consultas a la base de datos
├── routes/ # Rutas agrupadas por entidad
└── index.js # Entrada principal del servidor

## Scripts

- `npm run dev`: Ejecuta el servidor con nodemon

## Variables de entorno (`.env`)

```env
PORT=...
DB_USER=...
DB_PASSWORD=...
DB_HOST=localhost
DB_PORT=...
DB_NAME=mitienda
FRONTEND_URL=http://localhost:...
```
