# 🚀 API REST - Proyecto Integrador 2 (Blog Engine)

Este proyecto consiste en el desarrollo de una API REST funcional y estructurada utilizando **Node.js** y **Express**, conectada de forma persistente a una base de datos **PostgreSQL**. Permite gestionar un sistema de publicaciones con autores y posts vinculados.

## 🔗 Enlaces del Proyecto

* **Repositorio de Código:** `https://github.com`
* **API en Producción (Railway):** `https://railway.app`
* **URL Base Local:** `http://localhost:3000`

---

## 🛠️ Stack Tecnológico

* **Runtime:** Node.js
* **Framework:** Express.js
* **Base de Datos:** PostgreSQL
* **Driver DB:** `pg` (node-postgres)
* **Pruebas:** Jest y Supertest

---

## 📂 Estructura del Proyecto

El backend sigue un patrón de arquitectura limpio, separando las responsabilidades de la siguiente manera:

```text
├── src/
│   ├── db/          # Conexión centralizada a PostgreSQL
│   ├── middleware/  # Validaciones y manejador global de errores
│   ├── routes/      # Definición de rutas y mapeo de endpoints
│   ├── services/    # Lógica de negocio y consultas SQL parametrizadas
│   └── app.js       # Configuración e inicio del servidor Express
├── database.sql     # Script de inicialización (Setup y Seed)
├── .env.example     # Plantilla de variables de entorno
└── README.md        # Documentación del proyecto
```

---

## 📋 Requisitos Previos e Instalación

### 1. Requisitos Técnicos
Asegúrate de tener instalado en tu sistema local:
* **Node.js** (Versión 18 o superior)
* **PostgreSQL** corriendo localmente o en la nube

### 2. Configuración de la Base de Datos
Ejecuta el archivo `database.sql` en tu terminal de PostgreSQL o cliente gráfico (como pgAdmin) para crear las tablas e insertar los datos iniciales de prueba:

```sql
-- Crear tabla de autores
CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    bio TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crear tabla de posts
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT NOT NULL,
    author_id INTEGER NOT NULL,
    published BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    FOREIGN KEY (author_id) REFERENCES authors(id) ON DELETE CASCADE
);

-- Datos iniciales (Seed)
INSERT INTO authors (name, email, bio) VALUES
('Ana García', 'ana@example.com', 'Desarrolladora full-stack apasionada por Node.js'),
('Carlos Ruiz', 'carlos@example.com', 'Escritor técnico especializado en bases de datos'),
('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST');

INSERT INTO posts (title, content, author_id, published) VALUES
('Introducción a Node.js', 'Node.js es un runtime de JavaScript...', 1, true),
('PostgreSQL vs MySQL', 'Ambas bases de datos tienen ventajas...', 2, true);
```

### 3. Pasos para la Ejecución Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com.git
   cd tu-repositorio
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y completa los datos de tu conexión local:
   ```env
   PORT=3000
   DB_USER=tu_usuario_postgres
   DB_PASSWORD=tu_contraseña_postgres
   DB_HOST=localhost
   DB_PORT=5432
   DB_DATABASE=nombre_de_tu_base_de_datos
   ```

4. **Iniciar el servidor:**
   ```bash
   npm start
   ```

---

## 🔌 Documentación de la API (Endpoints)

### 👥 Autores (`/api/authors`)

#### 1. Obtener todos los autores
* **URL:** `/api/authors`
* **Método:** `GET`
* **Respuesta Exitosa (200 OK):**
  ```json
  [
    {
      "id": 1,
      "name": "Ana García",
      "email": "ana@example.com",
      "bio": "Desarrolladora full-stack..."
    }
  ]
  ```

#### 2. Crear un nuevo autor
* **URL:** `/api/authors`
* **Método:** `POST`
* **Cuerpo (JSON):**
  ```json
  {
    "name": "Luis Pérez",
    "email": "luis@example.com",
    "bio": "Desarrollador Backend"
  }
  ```
* **Respuesta Exitosa (201 Created):** Retorna el objeto del autor creado con su respectivo `id`.
* **Respuesta de Error (400 Bad Request):** Si falta algún campo obligatorio o el email ya existe.

---

### 📝 Publicaciones (`/api/posts`)

#### 1. Obtener todas las publicaciones
* **URL:** `/api/posts`
* **Método:** `GET`
* **Respuesta Exitosa (200 OK):** Lista completa de artículos registrados.

#### 2. Crear una nueva publicación
* **URL:** `/api/posts`
* **Método:** `POST`
* **Cuerpo (JSON):**
  ```json
  {
    "title": "Configurando Express",
    "content": "Pasos esenciales para iniciar un servidor...",
    "author_id": 1,
    "published": true
  }
  ```
* **Respuesta Exitosa (201 Created):** Retorna la publicación guardada en la base de datos.

#### 3. Eliminar una publicación inexistente (Manejo de Errores)
* **URL:** `/api/posts/:id`
* **Método:** `DELETE`
* **Respuesta de Error (404 Not Found):**
  ```json
  {
    "error": "La publicación con el ID especificado no existe."
  }
  ```

---

## 🧪 Pruebas Automatizadas

Las pruebas se ejecutan sobre endpoints HTTP usando `supertest` para garantizar la estabilidad del CRUD:
```bash
npm test
```

Se validan escenarios clave:
* Creación exitosa de autores y posts.
* Respuesta correcta frente a consultas de recursos no encontrados (404).

---

## 🤖 Uso de Inteligencia Artificial

Siguiendo las directrices del proyecto, se utilizaron herramientas de IA como asistentes de desarrollo bajo los siguientes criterios:

* **Prompts Utilizados:** 
  * *"Generar la estructura Markdown para documentar una API REST construida con Node.js y Express vinculada a las entidades Authors y Posts de PostgreSQL."*
  * *"Crear un ejemplo de bloque desplegable de HTML adaptable a Markdown para simplificar la lectura de las respuestas JSON de la API."*
* **Influencia en el Desarrollo:** La IA agilizó el diseño visual de la documentación técnica y facilitó la correcta organización de los bloques de comandos del setup inicial de la base de datos dentro del archivo README.
