# Delilah Restó

Este proyecto plantea la creación de un sistema de pedidos online para un restaurante. Se construyó una REST API que permite realizar altas, bajas, modificaciones y obtención de información sobre una estructura de datos que podría consumir un cliente. Parte del desafío estuvo enfocado en lograr que el desarrollo del proyecto sea puesto en producción utilizando web services.

## Documentación

#### 1. Clonar repo

Para empezar abre la terminal, copia, pega y ejecuta la siguiente linea de código:

```
git clone https://github.com/daniel-beta/Delilah-Resto.git
```

#### 2. Instalar el proyecto

Entra a la raíz del proyecto en la terminal y ejecuta el siguiente comando:

```
npm i
```

#### 3. Crear tablas

En la raíz del proyecto encontrarás un archivo llamado `db.sql`, con este podrás generar la base de datos. Puedes hacerlo con ayuda de **XAMPP** y **MySQL Workbench** para las configuraciones y conexiones del servidor.

![Captura de Pantalla 2021-12-30 a la(s) 10 22 30 p  m](https://user-images.githubusercontent.com/64673306/147801318-2c876ef8-c2b7-471b-8b60-cb1ca872789e.png)
![Captura de Pantalla 2021-12-30 a la(s) 10 24 08 p  m](https://user-images.githubusercontent.com/64673306/147801369-6904e180-8b64-4011-a04d-6833dc8628f6.png)

**NOTA:** Si no sabes como configurar las conexiones de tu servidor puedes basarte en los siguientes videos (según tu sistema operativo):

- [Mac](https://youtu.be/P2yS47MxjLM)
- [Windows](https://youtu.be/Wf-0PT7q6i4)

#### 4. Añadir TOKEN_SECRET y EXPIRES

También en la raíz del proyecto, encontrarás un archivo llamado `.env-example` y basado en este debes crear un nuevo archivo allí mismo con el nombre `.env` y allí debes definir la firma que estará ligada al token (TOKEN_SECRET) y su tiempo de expiración (EXPIRES):

```
TOKEN_SECRET="FirmaTokenDeEjemplo"
EXPIRES=600000
```

#### 5. Inicia el proyecto

Ejecuta la siguiente línea en tu terminal (Estando ubicado en la raíz del proyecto):

```
npm run start
```

Y asegurate el servidor se encuentre conectado validando el siguiente mensaje en la terminal:

![Captura de Pantalla 2021-12-30 a la(s) 10 34 57 p  m](https://user-images.githubusercontent.com/64673306/147801721-b1224491-42e7-4b0d-bd67-9c17c1d25ea6.png)

#### 6. Mira la documentación de la API

Valida la documentación que se encuentra en el archivo `spec.yml`, copiala y pegala en **[Swagger](https://editor.swagger.io/)** para facilitar su visualización.

![image](https://user-images.githubusercontent.com/64673306/147801952-836ef3e6-047e-4dd9-a208-d3fa7e0b3de5.png)

#### 7. Endpoints

##### AUTH

| method | endpoint              | body                                                      | header | description       |
| ------ | --------------------- | --------------------------------------------------------- | ------ | ----------------- |
| POST   | /v1/api/auth/register | {nombre_user, email, phone, address, contrasena, id_role} |        | Create a new user |
| POST   | /v1/api/auth/login    | {email, contrasena}                                       |        | Login of a user   |

##### USERS

| method | endpoint              | body                                                      | header  | description         |
| ------ | --------------------- | --------------------------------------------------------- | ------- | ------------------- |
| GET    | /v1/api/users         |                                                           | {TOKEN} | Get all users       |
| POST   | /v1/api/users         | {nombre_user, email, phone, address, contrasena, id_role} | {TOKEN} | Create a new user   |
| GET    | /v1/api/users/:userId |                                                           | {TOKEN} | Search a user by ID |
| PUT    | /v1/api/users/:userId | {id_role}                                                 | {TOKEN} | Update user role    |
| DELETE | /v1/api/users/:userId | {mealsId} (params)                                        | {TOKEN} | Delete a user       |

##### MEALS

| method | endpoint               | body                       | header  | description         |
| ------ | ---------------------- | -------------------------- | ------- | ------------------- |
| POST   | /v1/api/meals          | {nombre_meal, precio, img} | {TOKEN} | Create a new meal   |
| GET    | /v1/api/meals          |                            |         | Get all meals       |
| GET    | /v1/api/meals/:mealsId |                            |         | Search a meal by ID |
| PUT    | /v1/api/meals/:mealsId | {nombre_meal, precio, img} | {TOKEN} | Update a meal       |
| DELETE | /v1/api/meals/:mealsId | {mealsID} (params)         | {TOKEN} | Delete a meal       |

##### ORDERS

| method | endpoint                | body                                         | header  | description                 |
| ------ | ----------------------- | -------------------------------------------- | ------- | --------------------------- |
| POST   | /v1/api/orders          | {id_user, id_meal, id_forma_pago, id_status} | {TOKEN} | Get all orders              |
| GET    | /v1/api/orders          |                                              | {TOKEN} | Create a new order          |
| GET    | /v1/api/orders/user     |                                              | {TOKEN} | Get all orders from my user |
| PUT    | /v1/api/orders/:orderId | {orderId} (params), id_status                | {TOKEN} | Update order status         |
| DELETE | /v1/api/orders/:orderId | {orderId} (params)                           | {TOKEN} | Delete an order             |

#### 8. Postman

Podrás importar el archivo `Delilah-Resto.postman_collection.json` como colección en **POSTMAN** y así probar allí cada uno de los endpoints.

![image](https://user-images.githubusercontent.com/64673306/147806761-a4d3d6bb-067d-4d79-8d34-08792621bd39.png)
