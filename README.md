# Deep Space

### Booker Martin, Damian Browne, Ryan Nguyen, Teresa Ueunten

## Pitch

You are a deep-space adventurer exploring uncharted territory in search of rumored rare crystals when suddenly your spaceship is ambushed by an alien fleet! Dodge enemies and enemy projectiles and defend yourself by firing plasma bullets. If you spot any glowing space crystals, harvest them with your plasma cannon to collect the reward. Steer your craft into any nano-repair kits identifiable by their unmistakable health potion design to maintain your shields.

## Directions

- Steer your ship using the arrow or "WASD" keys
- Fire your plasma cannon using the space bar or "I" key
- Pause the game at any time using the "P" key. When paused:
    - Use the arrow or "WASD" to re-position the camera
    - Click and drag using the mouse to change the camera's direction

## Objects

- Player's ship
- Enemies:
    - Space kraken
    - Enemy ship
- Items:
    - Space crystal (Or Pylon)
    - Health potion
- Background:
    - Stars
    - Planets
- UI:
    - Health bar
    - Score
    - "Game Over" message
- Misc:
    - Player and enemy bullets

## Custom Geometries

- Kraken head
- Blue Spaceship's body and wings (Started as sea shells)
- Enemy ship's body
- Pylon crystal
- Health potion bottle

## Texture Mapping

- "Earth" and "Moon" planet textures
- Player "metal" ship body and ship "cockpit" textures
- Enemy "metal" ship body
- Kraken eye texture
- Pylon crystal texture

## Additions/Removals and Collisions

- The player ship, stars and planets, and UI are visible from the start of the game
- During the game, new enemies and obstacles will randomly "spawn" on the right side of the screen and move to the left side before "de-spawning"
- The player's ship and enemy ships have the ability to fire plasma bullets, which "spawn" in front of the ship
- Bullets "de-spawn" when colliding with the player ship or an enemy or when they fly offscreen
- The player's ship takes damage when colliding with an enemy or enemy bullet and "de-spawns" when defeated
- Enemies and crystals take damage when colliding with the player's bullets and "de-spawn" when defeated
- The health potion "de-spawns" when colliding with the player (and the player receives a health boost!)
  
  
# Credits

## Booker Martin

- Base game
    - Ship and camera controls
    - Object movement and rotation physics
    - Object collision detection
    - Object "spawning" and "de-spawning"
- UI
    - Health bar
    - Score
    - "Game Over" message
- Space kraken enemy variant
    - Kraken head custom geometry

## Damian Browne

- Pylon
    - Rhomboid custom geometry
    - Mapped crystal texture
- Planets
    - Imported planet assets from previous assignment.
    - Planets spawn in the background (like "stars") on occassion

## Ryan Nguyen

- Base game
    - Implementing Booker's code into Spaceship
- Player's spaceship
    - Spaceship body and wings custom geometries
- Enemy spaceship
    - Enemy Spaceship body custom geometry

## Teresa Ueunten

- Health potion
    - Glass bottle custom geometry
