![banner](./media/LargeBanner.jpg)


# Instroducción

Resumen e instalación del proyecto. Este proyecto es un challenge para la aceleración de Full Stack Developer de Alkemy.

## Características

- Tener un balance total de los ingresos y egresos personales.
- Ver los últimos 10 registros de ingresos y egresos, junto al balance.
- ABM de operaciones.
- Obtener operaciones según su tipo o categoría
- Registro de usuario.
- Login de usuario.

## Tecnologías

# Instalación del proyecto

## Clonar el repositorio

```bash
    git clone https://github.com/asgonzales/FullStackChallenge-Alkemy
```
## Crear una base de datos local en postgresql

## Dentro de la carpeta client crear un archivo .env con los siguientes valores

    DB_USER(postgres)= usuario de la base de datos
    DB_PASS(12345)= password de la base de datos
    DB_HOST=localhost:5432
    DB_NAME= nombre de la base de datos
    KEY_JWT= finnapp
    CORS_ORIGIN=http://localhost:3000

## Ejecutar los siguientes comandos

```bash
    npm install
    npm start
```


## Dentro de la carpeta client crear un archivo .env con los siguientes valores

    REACT_APP_BASE_URL=http://localhost:3001

## Ejecutar los siguiente comandos

```bash
    npm install
    npm start
```


### Luego se podrá ver el proyecto ejecutándose en localhost:3000


# CHALLENGE FULL STACK -JavaScript 🚀 <img src='./media/alkemy.jpg' width=150 />

## Objetivo

Desarrollar una aplicación para administración de presupuesto personal. La misma debe permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las operaciones registradas.

## Requerimientos Técnicos

Deberás desarrollar una API en Node.js junto a cualquiera de los siguientes frameworks, en sus versiones estables:

    ● Express

    ● Adonis

    ● Koa

En el caso de querer utilizar otro framework es posible, pero debe consultarse con anterioridad.
Los datos mostrados deben ser persistidos en una base de datos relacional. El esquema de datos puede armarse según se considere apropiado en base a los requerimientos del negocio. La API deberá exponer URLS que devuelvan datos en JSON.
Estos datos en JSON deberán ser consumidos por un cliente, a través de peticiones AJAX.
El cliente puede ser armado con React.js.
El trabajo realizado se subirá a un repositorio.


## Secciones

### Home

La pantalla de inicio deberá mostrar el balance actual, es decir, el resultante de los ingresos y egresos de dinero cargados, y un listado de los últimos 10 registrados.

### ABM de operaciones (ingresos y egresos)

La aplicación deberá contener:

    ● Formulario de registro de operación. El mismo deberá contener:

        ○ Concepto

        ○ Monto

        ○ Fecha

        ○ Tipo (ingreso o egreso)

    ● Listado de operaciones registradas según su tipo (ingreso o egreso).

    ● Desde el listado, se debe poder modificar o eliminar una operación registrada previamente. No debe ser posible modificar el tipo de operación (ingreso o egreso) una vez creada.

## Bonus

De forma adicional, puede

### Autenticación de usuarios

Agregar un formulario de registro y login para permitir identificar al usuario que utiliza la aplicación, y vincular las operaciones registradas al usuario autenticado en el sistema, tanto para el listado y creación de nuevos registros. Los datos indispensables para permitir el ingreso deben ser un email y contraseña, pudiendo agregar los que se deseen.

### Categorías de operaciones

Agregar la funcionalidad de categorizar las operaciones registradas en el gestor, como por ejemplo, una categoría “comida” para categorizar egresos. Adicionalmente, agregar la posibilidad de listar operaciones por categoría.

## Criterios a evaluar

    ● El diseño debe ser responsive, pudiendo utilizarse CSS puro o algún framework de Frontend

    ● Código limpio, buenas prácticas de programación, en idioma inglés

    ● Correcto diseño de la base de datos

    ● Buenas prácticas de GIT: Commits declarativos y atomizados

    ● Buenas prácticas para el nombre de rutas
