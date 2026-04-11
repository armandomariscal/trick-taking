# 🃏 Trick-Taking: Game Engine

A trick-taking card game engine built with a focus on extreme customization and real-time interaction. This project allows players to compete over a local network, each experiencing a unique visual interface based on their profile.

## Project Concept
The architecture is designed to clearly separate game logic from the visual layer. While the default theme is inspired by a pirate setting, the system supports multiple "skins" or environments that players can unlock through achievements.

- **Gameplay:** Turn-based prediction and trick-taking mechanics.
- **Multi-device:** Optimized for play on both mobile devices and desktop within a local network.
- **Customization (Themes):** A system of 7 configurable environments that dynamically change the entire interface (colors, shadows, and styles).
- **Achievement System:** Tracks victories and unlockables tied to each player's profile.

## Tech Stack
Chosen to ensure a deep understanding of modern industry standards:

* **Core:** [React 19](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) (strict typing for complex logic).
* **Build Tool:** [Vite](https://vitejs.dev/) (high-performance development environment).
* **UI Engine:** [Chakra UI v2](https://v2.chakra-ui.com/) (token-based design system for flexible theming).
* **Real-time DB:** [Firebase Firestore](https://firebase.google.com/) (real-time game state synchronization).

## Project Structure
The project follows a feature-based architecture to support scalability:

```text
src/
  ├── components/    # Atomic Components (Buttons, Layouts)
  ├── features/      # Logic Modules (Auth, Game Engine, Album)
  ├── theme/         # Design Tokens and Theme Configuration (7 dynamic themes)
  └── assets/        # Visual Assets decoupled by theme
```

## Installation

Cloning and preparing:

```bash
git clone [https://github.com/armandomariscal/trick-taking.git](https://github.com/armandomariscal/trick-taking.git)
cd trick-taking
npm install
```

Execute:

```bash
npm run dev
```

## Development Roadmap

[x] Base architecture with Vite, TypeScript, and Chakra UI.

[x] Dynamic Theming System (configurable environments).

[ ] Firebase integration (Auth & Firestore).

[ ] Album View: visualization of card concepts and mechanics.

[ ] Turn Logic: state management over local network.

[ ] Gamification: achievements and unlockable skins.

---

This project is an experimental environment focused on mastering React and modern software architecture.