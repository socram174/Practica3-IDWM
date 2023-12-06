# Instalaciones obligatorias

Estoy usando parte de las instrucciones usadas en el taller 2, por lo que de la carpeta de google drive se pueden consultar todas las imagenes menos las que estan en la carpteta web-api.

Como respaldo comparto esta carpeta de google drive con imagenes y comentarios en las mismas imagenes de como fui instalando cada programa requerido en una maquina virtual con windows 11 desde 0.

Tambien hay registro de la instalacion, configuracion y ejecucion de la parte base de datos y la api.

https://drive.google.com/drive/folders/1a0_NFVEGsPihNT9BanOKycUOB2mChhoD?usp=sharing

## Instalar en el siguiente orden

### Se puede hacer click en las letras azules para ir a la pagina de descarga correspondiente.

#### 1- [NodeJS](https://nodejs.org/en/)
La version current: 21.3.0 al momento de hacer el readme.

Una ves iniciado el instalador hacer click en siguiente hasta llegar a una ventana en la que aparece una opcion en donde se pide instalar chocolatey, y seleccionarla:

https://drive.google.com/file/d/1j3g-FQwF8ihNeiDYo0YeBOPsddGpEX6t/view

Seguir haciendo click a siguiente hasta que se abra una consola en la que se pide un par de veces presionar cualquier tecla, hasta que pida permiso para abrir un powershell y continuar con la instalacion:

https://drive.google.com/file/d/17JtyI-UoSyjMuqzZfCpXxge_6uFJiqdt/view
https://drive.google.com/file/d/1vq0IYomako_GneL4AX-PchvoYsMhNDW-/view

Desde aqui esperar a que termine la instalacion

#### 2- [VS Code](https://code.visualstudio.com/)
En la ventana de instalacion, al llegar a Select additional tasks dejar lo que viene predeterminado:

https://drive.google.com/file/d/1siDOTktethEyZA3jQ1gIDbRW5hE_-Tx2/view


#### 3- [Git](https://git-scm.com/download/win)
En la ventana de instalacion, al llegar a Choosing the default editor used by git, seleccionar use visual studio code as git's default editor:

https://drive.google.com/file/d/1O-iFW7-k26FTH7w2R8ftYNXtbAKUYx7F/view

Luego el resto de pasos es simplemente dejar todas las configuraciones predeterminadas haciendo click en next hasta terminar la instalacion.

https://drive.google.com/drive/folders/1yx8ojlO5nGDMXOXNYozKmt-9fvXD4DbB?usp=drive_link

#### 4- [Community server de MongoDB](https://www.mongodb.com/try/download/community) 

Al ingresar al la pagina de descarga, hacer click en el boton verde que dice "Select package" el cual lleva la vista a una seccion en donde se ve la plataforma, la version y el paquete el cual debe estar en formato msi, luego hacer click en download.

En la ventana de instalacion al llegar a "Select Setup Type", elegir el que dice "Complete", luego en la ventana que dice "Service Configuration", si no estan seleccionadas(deberian por default) seleccionar "Install MongoD as a Service" y "Run service as Network Service user".
Finalmente verificar que este seleccionada la opcion para instalar mongodb compass y continuar hasta finalizar la instalacion.

https://drive.google.com/drive/folders/1qHu2zq4yfUXEBJjL19n33GR-YM3sHFSq?usp=drive_link

#### 5- La aplicacion Expo GO en el celular (Android o IOS)

Esta aplicacion se puede descargar desde la tienda de aplicaciones de cada sistema operativo y es necesaria para poder probar la app movil.


#### 6- Tanto el telefono como la computadora deben estar conectados a la misma red wifi para que la app movil pueda conectarse al servidor local de la computadora.
---


## Luego de instalar los programas requeridos, clonar el proyecto y seguir los siguientes pasos

## Para la app movil

Abrir una nueva consola y en la raíz ingresar a la carpeta mobile con el comando:
```bash
 cd mobile
```

En una nueva consola ingresar ipconfig y copiar la direccion ipv4 entregada en pantalla, y luego en el archivo config.js en la variable ipv4 pegar la direccion copiada, por ejemplo:
```
const ipv4 = "192.3.4.2"; ESTA DIRECCION ES SOLO DE EJEMPLO, NO USARLA
```

#### Instalar las dependencias:
```bash
 npm install 
```

#### Para iniciar el servidor:

```bash
 npm start
```
Para verificar su funcionamiento con la aplicacion expo go en el celular, escanear el codigo QR que aparece en la consola o en la ventana del navegador que se abra al iniciar el servidor, lo que deberia abrir la aplicacion en el celular.

## Para la API

Abrir una nueva consola y desde la raíz ingresar a la carpeta api con el comando:
```bash
 cd api
```
(Opcional) La api usa por defecto el puerto 3000, pero si por algun motivo este ya esta en uso se puede cambiar la variable PORT en el archivo app.js al puerto deseado, por ejemplo:
```
const PORT = 4000;
```
Tener en cuenta que si se cambia el puerto en la api, tambien se debe cambiar en la app movil en el archivo config.js mencionado anteriormente, en la variable PORT.


#### Instalar las dependencias:
```bash
 npm install 
```

#### Correr los seeders de la base de datos
Tener en cuenta que cada vez que se corre un seeder se eliminan todos los datos existentes en la base de datos para ese tipo de seeder:

Para llenar la base de datos con la informacion:
```bash
 npm run seed
```
#### Para iniciar el servidor:

```bash
 npm run dev
```

Para verificar su funcionamiento entrar a http://localhost:3000/api/profile o con el puerto elegido, lo que deberia devolver un json con toda la informacion:


## POSTMAN

Para la ruta delete primero puede usar la ruta get users para obtener algun id, luego en la ruta delete agregar el id de algun usuario para eliminarlo en el Path Variables llamado id.

Para la ruta de edición debe cambiar el rut o dni para poder editar.

Para la creacion debe cambiar el rut y/o correo, ya que ambos son unicos