# 🎬 Movie App

Una aplicación móvil moderna para explorar y buscar películas, desarrollada con React Native y Expo. La app utiliza la API de The Movie Database (TMDB) para obtener información de películas y Appwrite para rastrear las búsquedas más populares.

## ✨ Características

- 🏠 **Pantalla Principal**: Descubre películas populares y tendencias
- 🔍 **Búsqueda Avanzada**: Busca películas en tiempo real con debounce
- 📊 **Películas en Tendencia**: Visualiza las películas más buscadas
- 💾 **Guardar Películas**: FALTA TERMINAR...
- 👤 **Perfil de Usuario**: FALTA TERMINAR...
- 📱 **Diseño Moderno**: Interfaz atractiva con NativeWind (Tailwind CSS)


## 🛠️ Tecnologías

- **React Native** - Framework para desarrollo móvil
- **Expo** - Plataforma para desarrollo React Native
- **TypeScript** - Tipado estático para JavaScript
- **Expo Router** - Sistema de navegación basado en archivos
- **NativeWind** - Tailwind CSS para React Native
- **Appwrite** - Backend as a Service para almacenar datos
- **TMDB API** - API de The Movie Database para información de películas

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Un dispositivo móvil con [Expo Go](https://expo.dev/client) o un emulador

## 🚀 Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/movie-app.git
   cd movie-app
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Configura las variables de entorno**

   Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

   ```env
   EXPO_PUBLIC_MOVIE_API_KEY=tu_api_key_de_tmdb
   EXPO_PUBLIC_APPWRITE_PROYECT_ID=tu_proyecto_id_de_appwrite
   EXPO_PUBLIC_APPWRITE_DATABASE_ID=tu_database_id
   EXPO_PUBLIC_APPWRITE_TABLE_ID=tu_table_id
   ```

   Para obtener una API key de TMDB:

   - Visita [TMDB](https://www.themoviedb.org/settings/api)
   - Crea una cuenta y solicita una API key

   Para configurar Appwrite:

   - Visita [Appwrite Cloud](https://cloud.appwrite.io/)
   - Crea un proyecto y una base de datos
   - Crea una colección con los campos necesarios

4. **Inicia el servidor de desarrollo**

   ```bash
   npm start
   ```

5. **Ejecuta la aplicación**
   - Presiona `a` para abrir en Android
   - Presiona `i` para abrir en iOS
   - Presiona `w` para abrir en web
   - Escanea el código QR con Expo Go en tu dispositivo móvil

## 📱 Scripts Disponibles

```bash
# Iniciar el servidor de desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en web
npm run web

# Ejecutar linter
npm run lint
```

## 📁 Estructura del Proyecto

```
movie-app/
├── app/                    # Rutas de la aplicación (Expo Router)
│   ├── (tabs)/            # Navegación por pestañas
│   │   ├── index.tsx      # Pantalla principal
│   │   ├── search.tsx     # Pantalla de búsqueda
│   │   ├── saved.tsx      # Películas guardadas
│   │   └── profile.tsx    # Perfil de usuario
│   ├── movies/            # Rutas de películas
│   │   └── [id].tsx       # Detalles de película
│   └── _layout.tsx        # Layout principal
├── components/            # Componentes reutilizables
│   ├── MovieCard.tsx
│   ├── SearchBar.tsx
│   └── TrendingCard.tsx
├── constants/            # Constantes y recursos
│   ├── icons.ts
│   └── images.ts
├── services/             # Servicios y APIs
│   ├── api.ts           # Integración con TMDB
│   ├── appwrite.ts      # Integración con Appwrite
│   └── setFetch.ts      # Hook personalizado para fetch
├── interfaces/          # Definiciones de tipos TypeScript
├── types/              # Tipos adicionales
└── assets/            # Recursos estáticos (imágenes, fuentes)
```

## 🎯 Funcionalidades Principales

### Búsqueda de Películas

- Búsqueda en tiempo real con debounce de 500ms
- Integración con TMDB API
- Rastreo de búsquedas populares en Appwrite

### Películas en Tendencia

- Muestra las 5 películas más buscadas
- Actualización automática basada en conteo de búsquedas

### Detalles de Película

- Información completa de cada película
- Navegación mediante Expo Router

## 🔧 Configuración de Appwrite

Para que la funcionalidad de tendencias funcione correctamente, necesitas configurar una base de datos en Appwrite con la siguiente estructura:

**Colección**: `searches` (o el nombre que configures)

**Atributos**:

- `searchTerm` (String) - Término de búsqueda
- `movie_id` (Integer) - ID de la película
- `count` (Integer) - Contador de búsquedas
- `title` (String) - Título de la película
- `poster_url` (String) - URL del póster


---

⭐ Si te gusta este proyecto, ¡dale una estrella!


