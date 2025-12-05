## Overview

This project is a minimal, functional prototype built using the **ImpactJS** game engine and the **Weltmeister** level editor. It demonstrates fundamental concepts required for 2D platformer development, including tile-based level design, collision systems, entity creation, animation handling, and weapon mechanics.

The included sample level (**dorm1.js**) showcases:

* A controllable player character
* A simple zombie enemy
* Basic shooting and grenade mechanics
* Tile map and collision layers compatible with Weltmeister

This project serves as both a learning exercise and a foundation for expanding into more complete games.

---

## Project Structure

```
weltmeister_game/
│
├── index.html                    # Game bootstrapper (loads Impact + main.js)
│
├── lib/
│   └── game/
│       ├── main.js               # Entry point for the game logic
│       │
│       ├── levels/
│       │   └── dorm1.js          # Weltmeister-created test level
│       │
│       └── entities/
│           ├── player.js         # Player entity + bullet & grenade classes
│           └── zombie.js         # Basic enemy entity
│
└── media/
    ├── dorm-tiles.png            # tileset
    ├── collision-tiles.png       # collision tiles
    ├── player.png                # player sprite sheet
    ├── zombie.png                # zombie sprite sheet
    ├── bullet.png                # bullet sprite
    └── grenade.png               # grenade sprite
```

---

## Running the Project

### 1. Install / Provide the ImpactJS Engine

ImpactJS is not included due to licensing restrictions. Place your engine files in:

```
weltmeister_game/impact/
```

Specifically ensure:

```
weltmeister_game/impact/impact.min.js
```

is accessible, since `index.html` loads this file.

---

### 2. Launching the Game

Once ImpactJS is in place:

1. Open **index.html** in a local server environment
   (e.g., Live Server in VS Code, Python `http.server`, or MAMP/XAMPP).
2. The game canvas will appear and automatically load:

* LevelDorm1
* Player and zombie entities
* Basic movement, jumping, shooting, and grenades

---

## Using Weltmeister

Weltmeister is ImpactJS’s built-in map editor.
To open it:

```
http://localhost/weltmeister.html
```

Then load:

```
lib/game/levels/dorm1.js
```

You can now:

* Paint new tiles
* Adjust collision tiles
* Add/move entities (player, zombie, etc.)
* Save changes directly (PHP backend required)

---

## Controls

| Key             | Action                           |
| --------------- | -------------------------------- |
| **Left Arrow**  | Move left                        |
| **Right Arrow** | Move right                       |
| **X**           | Jump                             |
| **C**           | Fire weapon                      |
| **TAB**         | Toggle weapon (Bullet ↔ Grenade) |

---

## Features Implemented

### ✔ Player Movement & Physics

Gravity, acceleration, jump logic, sprite-based animations.

### ✔ Enemy AI

Simple edge-detection-based patrol, collision-based damage.

### ✔ Weapons

* **Bullet**: fast projectile, 3 damage
* **Grenade**: bounces up to 3 times, then explodes (10 damage)

### ✔ Respawn System

Player respawns at initial position after death.

### ✔ Level Layout

* Main tileset layer
* Collision tiles
* Entities placed via Weltmeister

---


## Acknowledgements

This implementation is based on:
* Core mechanics demonstrated in the Unit II (Part II) PDF

