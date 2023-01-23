# Evaluación iCreativa

### Descripción

Aplicación sencilla de gestión de tareas: permite añadirlas, completarlas y eliminarlas.  
Cuenta con un solo usuario, cuyas credenciales son:

```
  username: 
  testtodo@icreativa.com.ec

  password: 
  testtodo
```

La solución consiste en una API REST desarrollada con Nest.js y una aplicación web desarrollada con React.
Puede acceder a una versión publicada a través de este link: 
[https://icreativatestfront.pages.dev](https://icreativatestfront.pages.dev)

### Ambiente local

Para levantar la API es necesario proveerle una base de datos Postgres. 
La manera más sencillo de hacerlo es a través de Docker; podemos levantar un contenedor usando el siguiente comando:
```
docker run --name basic-postgres --rm -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=4y7sV96vA9wv46VR -e PGDATA=/var/lib/postgresql/data/pgdata -v /tmp:/var/lib/postgresql/data -p 5432:5432 -it postgres:14.1-alpine
```

Las variables del archivo .env deben coincidir con los parámetros de Docker (aunque es una clara falencia de seguridad, hemos permitido que el archivo de environment sea parte del repositorio para su conveniencia)

Para levantar la API, debemos tener Nest instalado globalmente (`npm i @nestjs/cli`), instalar los módulos (`npm i`) y, crucialmente y con la base de datos prendida, correr las migraciones (`npm run typeorm:run-migrations`). La API no permite crear nuevos usuarios, y es por eso que hemos "hardcodeado" el usuario predeterminado. Una vez ejecutados, podemos acceder al servidor desde el puerto 3000 a través de `npm run start:dev`. El proceso es similar para el front (`npm i` + `npm run dev`), pero el puerto es el 5173.


