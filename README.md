# GBAXG

Welcome to the GBA Cross-Game Pokemon Map Randomiser. This emulator mod loads and modifies Fire Red, Emerald and Crystal Dust ROMS so you can simultaneously play across Kanto, Jhoto and Hoenn. Memory is dynamically altered so you can keep your team, items, money and trainer data when moving between games/reigons. [Go To The Emulator](https://kittypboxx.github.io/GBAXG/build)

---

## Emulation/Game Features

- Multi-game save state support and auto save
- Remappable Keybind and Gamepad support
- East-to-set Clock
- Enable/Disable/Remap random warps at any time (even when the games running)
- Limit random warps up to certain points in the game (e.g only up to the first N gyms)
- Speed-Up (up to 10x)
- Give yourself items at any time
- Cheats such as walk-through walls, bike everywhere, teleport everywhere, force whiteout, force surf 
- Get hints for where to find key locations

--- 

## Progress

This project is currently in alpha development. It should be playable but you may encounter some bugs. Initially only warps up to the first gyms in each game will be enabled. More sections will be added as they are tested and seeds can be manually validated for them. The current progress can be seen here:

| Progression  | FR Warps Added | FR Warps Checked  | FR Seeds Verified | C Warps Added | C Warps Checked | C Seeds Verified | E Warps Added | E Warps Checked | E Seeds Verified |
| -----------  | -----------    | -----------       | -----------       | -----------   | -----------     | -----------      | -----------  | -----------      | -----------      |
| To Gym 1     | &check;        | &check;           | &check;           | &check;       | &check;         | &check;          | &check;      | &check;          | &check;          |
| To Gym 2     | &check;        | &check;           | &check;           | &check;       | &check;         | &check;          | &check;      | &check;          | &check;          |
| To Gym 3     | &check;        | &check;           | &check;           | &check;       | &check;         | &check;          | &check;      | &check;          | &check;          |
| To Gym 4     | &check;        | &check;           | -                 | &check;       | -               | -                | &check;      | &check;          | -                |
| To Gym 5     | &check;        | &check;           | -                 | &check;       | -               | -                | &check;      | &check;          | -                |
| To Gym 6     | &check;        | &check;           | -                 | &check;       | -               | -                | &check;      | &check;          | -                |
| To Gym 7     | &check;        | &check;           | -                 | &check;       | -               | -                | &check;      | &check;          | -                |
| To Gym 8     | &check;        | &check;           | -                 | &check;       | -               | -                | &check;      | &check;          | -                |
| To Champ     | &check;        | &check;           | -                 | &check;       | -               | -                | &check;      | &check;          | -                |
| Sevii        | -              | -                 | -                 | N/A           | N/A             | N/A              | N/A          | N/A              | N/A              |



---

## Setup

1. Legally backup a copy *Fire Red 1.1 (U)* [^1] and *Emerald (U)* [^2]
2. Download Crystal Dust V2 patch from here [here](https://domoreaweso.me/games/pokemon-crystaldust). **Make sure to use V2 and not V3**  
3. Use a [rom patcher](https://www.marcrobledo.com/RomPatcher.js/) to apply the Crystal Dust V2 patch to a copy of your Emerald (U). You should now have 3 roms.
4. Open [the emulator](https://kittypboxx.github.io/GBAXG/build) in [Chrome](https://www.google.com/intl/en_uk/chrome/) (**Edge is not supported**) [^4]  
5. Load each rom into the correct slot. Crystal and Emerald will need to run some initialisation code when they are loaded
6. When all 3 roms are loaded press 'start' and it should boot into a new game of Fire Red 

ESC will bring up the emulation menu where you can change things like the seed.

<br>
[^1] (md5sum 51901a6e40661b3914aa333c802e24e8) I've tried to make it compatible with 1.0 as well but this is untested
<br>
[^2] (md5sum 605b89b67018abcea91e693a4dd25be3)
<br>
[^3] (md5sum ef47f6528875dc3de037e75bba6a0ecb)
<br>
[^4] Firefox may work but is prone to lagging (especially during speedup)

---

## Rules

If you've not played a map randomiser before the goal is to find and beat the Gyms, E4, Champion (and final boss). In this you start in Pallet Town where none of the loading zones have been randomised but that will change as soon as you get to Viridian. 

The randomisation logic should make it so that it's possible to beat the Gyms, E4 and Champion in order. The logic only guarantees order within each region. This means you should always be able to beat Kanto Gym 1 before Gym 2(/3/4/5 e.t.c) however you might need to beat Jhoto gyms 1,2 and 3 before you can get to Kanto Gym 1. 

If you are only randomising up to certain gyms you will never have to play beyond that point. 

In a full randomisation there are 24 Gyms, 12 E4, 3 Champions and 1 final boss (Steven). Red is not present in Crystal Dust V2.

---

## Manually Confirmed Seeds

In theory any seed should generate a mapping that is completable in order. However there may be bugs (especially during alpha development). A list of manually confirmed seed files can be found [here](https://kittypboxx.github.io/GBAXG/Seeds). These have been played and are confirmed to be completable.  

<br>

---

## Current Cross-Game limitations

- PC boxes are not accessible outside the current region/game.
- Whiteout (and teleport e.t.c) will go the the last heal point in which ever region/game you are currently in. 
- Repels effects will end when changing region/game.
- Equivalent progression flags are not transferred e.g Getting the Soul badge will let you surf in Kanto but you'll still need the Balance Badge to surf in Hoenn. 
- Some items (mostly from Crystal Dust e.g rage candy bar) only work in the game they were designed for

---

## Known Issues

- Bike everywhere dosn't work for the ladders in Fortree or Pacifidlog
- E4 rooms sometimes make you walk into the void if entered from the top
- Minor graphical glitches in Emerald e.g (reflection colours, rival batle sprites, exclamation mark colour)  
- There's a random guy in Azalea (and a route connector) who looks like Red and the game crashes if you speak to him...

---

## F.A.Q

**I found a bug. What should I do?** 
> Check known issues and github issues to make sure it's not already been raised. If it hasn't been raised report it. Preferably include as much details as possible and screenshots.

**Can I choose which reigon I start in?**
> Not at the moment. This may be added in future.

**Can I randomise the pokemon?**
> Maybe. You will need to randomise each rom seperately. [This](http://artemis251.fobby.net/downloads/emerald/) randomiser semms to work with Crystal Dust and Emerald (from the brief tests I did). 

**Will this work with X Rom hack?**
> Simple binary hacks *may* be compatible. Decomp hacks will probably **not** work without making changes to some of the hard coded ROM and RAM addresses in the following files: `WarpFixes, EmulationCoreHacks, SpriteOffsetData`

**Can I play on mobile/tablet**
> Maybe. The mod has been designed for and tested on desktop and requires a reasonable processor. However it may be able to run within some mobile browsers. A long swipe down can be used to open/close the main menu. On-screen keys can be activated from the controls screen. Some additional performance may be gained by activating 'Potato PC' mode from the hacks screen. This will disable audio and may cause frames to be missed.  

**It gets stuck saying 'Initialising' for Emerald/Crystal**
> The first time Emerald/Crystal are loaded (after erasing data) save data needs to be loaded in the background. This isn't the case for Fire Red as you manually create a new game. Initialising the roms should generally not take more than 30 seconds the first time they are loaded and should be instant after. If the initilisation is taking a long time/appears to be stuck you should refresh the page and try again. Less powerful devices (such as tablets) may run out of resources during initilisation and fail. As a work-around you can start the game on a more powerful device, save the game and export the save file ('EXPORT LAST'). You can then import this on your less powerful device BEFORE loading the roms and initilisation will be skipped.   

--- 

## Credits

### Coding - `KittyPBoxx`
### Testers - `Sabata`
<br>
*Crystal Dust V2 was created by Sierraffinity (domoreaweso.me)*<br>
*IodineGBA (the core emulator) was created by Grant Galitz (taisel)* <br>

---

## Licence 

MIT License (MIT)

Copyright © 2022, [KittyPBoxx](https://github.com/KittyPBoxx/).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
