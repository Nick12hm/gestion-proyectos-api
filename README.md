## Description

Este proyecto genera un api, la cual permite gestionar proyectos para diferentes usuarios desde un usuario o varios administradores.

Esta API actualmente realiza un login de usuario, el cual habilita por medio de un token, las demás rutas del API. Se crearon los endpoints para usuarios y proyectos.

Se completa todo el CRUD para la entidad de proyectos y usuarios.

Los endpoints se pueden analizar de mejor manera si al correr el proyecto entran a la dirección: http://localhost:3004/api#/

## Intalaciones

```bash
$ npm install
```

## Compile and run the project

```bash
# Ejecutar proyecto en local
$ npm run start

# Visualizar endpoints
$ npm run start:dev

```

## Base de datos

Se debe descargar PostgreSQL en (https://www.postgresql.org/download/)

```bash
#Crear usuario y clave (Luego se remplazan en el backend)
$ CREATE ROLE myuser WITH LOGIN PASSWORD ‘passwd’;

# Asignar Base de datos a usaurio
$ CREATE DATABASE nuevadb WITH OWNER usuario;

#importar estructura y data (Esta en la carpeta Base_datos)
$ pg_dump -U master -h localhost -d proyectos_adm -s < estructura.sql

#importar estructura y data (Esta en la carpeta Base_datos)
$ pg_dump -U master -h localhost -d proyectos_adm -s < data.sql
```

## Contacto

- LinkedIn - [Yovany Hernandez](https://www.linkedin.com/in/yovany-hernandez-morales-5034471ba/)
- Email - [Yovany Hernandez](yovanick300@gmail.com)
