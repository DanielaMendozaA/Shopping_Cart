# e_comfast_prueba_riwi

## Descripción
Este proyecto es una aplicación desarrollada en Node.js usando Express y Sequelize con TypeScript. Incluye autenticación con JWT, manejo de contraseñas con bcrypt, y gestión de dependencias con tsyringe.

## Requisitos
- Node.js (versión 16.x o superior)
- npm (versión 7.x o superior)

## Instalación

1. **Clona el repositorio**:
```bash
    git clone https://github.com/DanielaMendozaA/Shopping_Cart.git
```

## Navega al directorio del proyecto:
```bash
    cd e_comfast_prueba_riwi
```
## Instala las dependencias:
```bash
    npm install
```


2. **Configura las variables de entorno**:
- Crea un archivo .env en la raíz del proyecto y define las siguientes variables de entorno:
```dotenv
DB_DIALECT=""
DB_HOST=""
DB_USER=""
DB_PASSWORD=""
DB_NAME=""
PORT=""
JWT_SECRET=""
```

## Uso
1. **Modo de Desarrollo**
- Para ejecutar la aplicación en modo de desarrollo, usa el siguiente comando:
```bash
    npm run dev
```
- Este comando inicia el servidor con nodemon, que reinicia automáticamente el servidor cada vez que detecta cambios en los archivos.

2. **Modo de Producción**
- Si quieres ejecutar la aplicación en modo de producción, compila primero el proyecto y luego inicia el servidor:
- Compila el proyecto:
```bash
    npx tsc
```

- Inicia la aplicación:
```bash
    node dist/index.js
```

## Estructura del Proyecto
e_comfast_prueba_riwi/
├── app/
│   ├── config/
|   ├── controllers/
|   ├── interfaces/
|   ├── middldewares/
│   ├── models/
│   ├── repositories/
│   ├── routes/
│   ├── services/
│   └── server.ts
├── dist/ (Generado tras la compilación)
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

- app/: Contiene el código fuente de la aplicación.
- dist/: Contiene el código compilado en JavaScript (modo producción).
- package.json: Archivo de configuración de npm con las dependencias y scripts del proyecto.
- .env: Archivo de configuración para variables de entorno.
- tsconfig.json: Configuración del compilador TypeScript.

**Dependencias**
- Express: Framework web para Node.js.
- Sequelize: ORM para manejar bases de datos relacionales.
- TypeScript: Superset de JavaScript que añade tipado estático.
- bcrypt: Librería para encriptar contraseñas.
- jsonwebtoken: Implementación de JWT para autenticación.
- dotenv: Carga variables de entorno desde un archivo .env.
**DevDependencies**
- nodemon: Herramienta para reiniciar el servidor automáticamente durante el desarrollo.
- ts-node: Ejecuta archivos TypeScript sin compilarlos manualmente.
- @types: Tipos de TypeScript para varias librerías.


## Comandos para mysql

```sql
CREATE DATABASE IF NOT EXISTS E_comFast;
USE E_comFast;

INSERT INTO roles (name) VALUES 
("admin"),
("client");

INSERT INTO entities (name, createdAt, updatedAt) VALUES
("cart", now(), now()),
("order", now(), now()),
("product-cart", now(), now()),
("product", now(), now()),
("user", now(), now());

INSERT INTO permissions (roleId, entityId, canCreate, canUpdate, canDelete, canGet, canGetByOne createdAt, updatedAt) VALUES
(1, 1, false, false, false, false, true now(), now()),
(1, 2, false, true, true, true, true, now(), now()),
(1, 3, false, false, false, true, true, now(), now()),
(1, 4, true, true, true, true, true, now(), now()),
(1, 5, true, true, true, true, true, now(), now()),

(2, 1, false, true, true, false, true, now(), now()),
(2, 2, true, false, true, false, true, now(), now()),
(2, 3, true, true, true, false, true, now(), now()),
(2, 4, false, false, false, true, true, now(), now()),
(2, 5, true, true, false, false, true, now(), now());
```
