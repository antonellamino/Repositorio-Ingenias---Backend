

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation)

### General Info
***
Proyecto Ingenias+ - 
¡Bienvenid@s!✨ este repositorio contiene el código correspondiente a la primera pre - entrega del proyecto final del curso de "Curso de Backend"
El grupo de trabajo está conformado por: Carolina Mendez, Antonela Miño, Olivia Kolender y Rocio Coccia 🙋‍♀️

📌 A C T I V I D A D 
Debes crear la estructura básica de un servidor web utilizando Express JS.
Incluye el archivo .ENV donde debes almacenar en una variable de entorno con la ruta parcial + 
nombre del archivo de datos JSON, además del puerto de ejecución del servidor web.
  ● El archivo JSON debes guardarlo en una subcarpeta del proyecto llamada /database/
  ● El número de puerto del servidor web debe ser 3008
  ● Carga en una constante llamada TRAILERFLIX el contenido del archivo JSON en formato 
    Array de objetos (usando fileSystem API + JSON.parse para obtener y transformar los datos)
  ● Crea un contenido en formato texto de bienvenida para la ruta raíz del proyecto “/”. El 
 mensaje a mostrar puede ser texto plano, o contenido HTML. (Mejor si es este último)
 Con la estructura base del proyecto ya desarrollada, deberás crear los endpoints necesarios para 
 listar el catálogo de películas y series por diferentes posibles búsquedas. 

## Technologies
***
A list of technologies used within the project:
* [JavaScript]
* [NODE.js] Version 18.17.0
* [JavaScript JSON]()
* [NPM]
* [Nodemon]
* [Express]

## Installation
***
A continuación se muestran los pasos y comandos utilizados para instalar las tecnologías, frameworks y dependencias y comenzar nuestro proyecto.
```
#### Crear carpeta del proyecto y moverse dentro de la misma

> mkdir trailerflix && cd trailerflix
```
#### Inicializamos el proyecto de NODE.js creando package.json file
```
> npm init -y
```
#### Crear el archivo index (entry point of our API)
```
> server.js
```
#### Intalamos dependencias para la configuración básica
*Dev dependencias
```
> npm i -D nodemon
```
*Dependencias
```
> npm i express ejs path --save
```
#### Modificamos nuestro package.json con los scripts que necesitamos
"start": "node server.js"

#### Crear carpeta que contenga las vistas y accedo a las mismas
mkdir views && cd views

#### Crear carpeta que contenga los archivos css e imagenes y accedo a las mismas
mkdir public && cd public

#### Crear el archivo .env (inicio de sesion)
> .env


## Conceptos
***
NPM (Node Package Manager), es una herramienta de línea de comandos que permite a los desarrolladores descargar, instalar y actualizar paquetes de software desde un repositorio centralizado.

Nodemon: es una utilidad de interfaz de línea de comandos (CLI) desarrollada por @rem que envuelve su aplicación Node, vigila el sistema de archivos y reinicia automáticamente el proceso.

Express.js: es uno de los frameworks más populares para el desarrollo de aplicaciones web en Node.js, 
proporcionando una estructura flexible y minimalista para construir aplicaciones web y APIs. 

EJS: Es un lenguaje/motor de plantillas simple que permite a su usuario generar HTML con javascript simple.


