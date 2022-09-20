![banner](../media/LargeBanner.jpg)

# Introducción

Instalación y resumen del back-end del challenge de Alkemy para Full Stack Developer

# Instalación del Back-End

### Dentro de la carpeta api
```bash
    npm install
    npm start
```

# Endpoints

## Ruta inicial localhost:3001/

## Usuarios

### POST /user/signup

    Endpoint para el registro de usuarios.
    body: email, password

### POST /user/signin

    Endpoint para el inicio de sesión de un usuario
    body: email, password

## Operaciones

### GET /operation/total

    Endpoint para obtener el balance total de ingresos y egresos.
    Devuelve el resultante de los ingresos y egresos cargados.

### GET /operation/lastrecords

    Endpoint que devuelve las últimas 10 operaciones.

### GET /operation/type/:type

    Endpoint que devuelve todos las operaciones de un tipo (ingreso o egreso).
    :type = 'egreso' || 'ingreso'

### GET /operation/category/:categoryId

    Endpoint que devuelve todas las operaciones de una categoría.
    :categoryId = UUID de una categoría.

### POST /operation

    Endpoint para la creación de una operación
    body: concept, mount, date, type, userId, categoryId
    todos son necesarios

### PUT /operation

    Endpoint para la modificación de una operación
    body: operationId, concept, mount, date, type, categoryId
    al menos uno además de 'operationId' es necesario

### DELETE /operation

    Endpoint para el borrado lógico de una operación
    body: operationId