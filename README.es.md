# 🃏 Trick-Taking: Game Engine

Un motor de juego de cartas de "bazas" construido con un enfoque en la personalización extrema y el tiempo real. Este proyecto permite a los jugadores enfrentarse en una red local, cada uno con una experiencia visual única basada en su perfil.

## Concepto del Proyecto
La arquitectura está diseñada para separar la **lógica del juego** de la **capa visual**. Aunque el tema por defecto es el mundo de los piratas, el sistema soporta múltiples "skins" o ambientes que el jugador desbloquea mediante logros.

- **Dinámica:** Juego de predicción y bazas por turnos.
- **Multidispositivo:** Optimizado para jugar desde móviles o computadoras en red local.
- **Personalización (Themes):** Sistema de 7 ambientes configurables que cambian toda la interfaz (colores, sombras y estilos).
- **Sistema de Logros:** Registro de victorias y desbloqueables vinculados al perfil del jugador.

## Stack Tecnológico
Elegido para garantizar un aprendizaje profundo de los estándares de la industria:

* **Core:** [React 19](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) (Tipado estricto para lógica compleja).
* **Build Tool:** [Vite](https://vitejs.dev/) (Entorno de desarrollo de alto rendimiento).
* **UI Engine:** [Chakra UI v2](https://v2.chakra-ui.com/) (Sistema de diseño basado en tokens para facilitar el cambio de temas).
* **Real-time DB:** [Firebase Firestore](https://firebase.google.com/) (Sincronización de estados de juego en tiempo real).

## Estructura de Archivos
El proyecto utiliza una arquitectura basada en **Features** para facilitar el escalamiento:

```text
src/
  ├── components/    # Componentes atómicos (Botones, Layouts)
  ├── features/      # Módulos de lógica (Auth, Game Engine, Album)
  ├── theme/         # Tokens de diseño y configuración de los 7 temas
  └── assets/        # Recursos visuales desacoplados por tema
```

## Instalación

Clonar y preparar:

```bash
git clone [https://github.com/armandomariscal/trick-taking.git](https://github.com/armandomariscal/trick-taking.git)
cd trick-taking
npm install
```

Ejecutar:

```bash
npm run dev
```

## Road Map de Desarrollo

[x] Arquitectura base con Vite, TS y Chakra UI.

[x] Motor de Temas Dinámicos (Ambientes configurables).

[ ] Integración de Firebase (Auth & Firestore).

[ ] Vista de Álbum: Visualización de conceptos y mecánicas de cartas.

[ ] Lógica de Turnos: Manejo de estados en red local.

[ ] Gamificación: Logros y skins desbloqueables por victorias.

---

Este proyecto es un entorno de experimentación para dominar React y arquitecturas de software modernas.